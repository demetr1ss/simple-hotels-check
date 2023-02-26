import {api} from '../services/api';
import {call, put, takeEvery} from 'redux-saga/effects';
import {changeLoadingStatus, fetchHotels, setHotels} from '../store/app-process/app-process';
import {store} from '../store';
import {CURRENCY, LIMIT, LoadingStatus, NameSpace, LANG} from '../const/const';
import {AxiosResponse} from 'axios';
import {Hotel} from '../types/types';

const fetchHotelsData = () => {
  const {location, checkIn, duration} = store.getState()[NameSpace.AppProcess];
  const date = new Date(checkIn);
  date.setDate(date.getDate() + Number(duration));

  const checkOut = date.toLocaleDateString('en-CA');

  const data = api.get<Hotel[]>('cache.json', {
    params: {
      location,
      currency: CURRENCY,
      checkIn,
      checkOut,
      limit: LIMIT,
      lang: LANG,
    },
  });

  return data;
};

function* fetchHotelsWorker() {
  try {
    const {data}: AxiosResponse<Hotel[]> = yield call(fetchHotelsData);
    const favoriteHotels = store.getState()[NameSpace.AppProcess].favoriteHotels;
    const {checkIn, duration} = store.getState()[NameSpace.AppProcess];
    const hotelsWithCustomKeys = data.map((item) => {
      const isFavorite = favoriteHotels.find(({hotelId}) => hotelId === item.hotelId)?.isFavorite;
      return {...item, isFavorite: !!isFavorite, checkIn, duration};
    });

    yield put(setHotels(hotelsWithCustomKeys));
  } catch {
    yield put(changeLoadingStatus(LoadingStatus.Rejected));
    throw new Error('fetchHotelsWorker error');
  }
}

export function* hotelsWatcher() {
  yield takeEvery(fetchHotels.type, fetchHotelsWorker);
}
