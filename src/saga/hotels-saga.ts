import {api} from '../services/api';
import {call, put, takeEvery} from 'redux-saga/effects';
import {changeLoadingStatus, fetchHotels, setHotels} from '../store/app-process/app-process';
import {store} from '../store';
import {CURRENCY, LIMIT, LoadingStatus, NameSpace, LANG, ToastType} from '../const/const';
import {AxiosError, AxiosResponse} from 'axios';
import {HotelType} from '../types/types';
import {formatDate, showNotify} from '../utils/utils';
import {addDays} from 'date-fns';

const fetchHotelsData = () => {
  const {location, checkIn, duration} = store.getState()[NameSpace.AppProcess];
  const checkOutDate = addDays(new Date(checkIn), duration);

  const data = api.get<HotelType[]>('cache.json', {
    params: {
      location,
      currency: CURRENCY,
      checkIn: formatDate(new Date(checkIn)),
      checkOut: formatDate(checkOutDate),
      limit: LIMIT,
      lang: LANG,
    },
  });

  return data;
};

function* fetchHotelsWorker() {
  try {
    const {data}: AxiosResponse<HotelType[]> = yield call(fetchHotelsData);
    const {checkIn, duration, favoriteHotels} = store.getState()[NameSpace.AppProcess];

    const hotelsWithCustomKeys = data.map((item) => {
      const isFavorite = favoriteHotels.find(({hotelId}) => hotelId === item.hotelId)?.isFavorite;

      return {...item, isFavorite: !!isFavorite, checkIn, duration};
    });

    yield put(setHotels(hotelsWithCustomKeys));
  } catch (e) {
    yield put(changeLoadingStatus(LoadingStatus.Rejected));

    if ((e as AxiosError).code === 'ERR_NETWORK') {
      showNotify({
        type: ToastType.Error,
        message: 'Сервис временно не доступен. Попробуйте обновить страницу',
      });
    }

    if ((e as AxiosError).code === 'ERR_BAD_REQUEST') {
      showNotify({
        type: ToastType.Error,
        message: 'Возможно, Вы ошиблись в параметрах поиска. Обновите страницу и попробуйте еще раз',
      });
    }

    throw new Error((e as AxiosError).code);
  }
}

export function* hotelsWatcher() {
  yield takeEvery(fetchHotels.type, fetchHotelsWorker);
}
