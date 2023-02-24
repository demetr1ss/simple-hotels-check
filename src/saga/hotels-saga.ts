import {api} from '../services/api';
import {call, put, takeEvery} from 'redux-saga/effects';
import {Hotel} from '../types/types';
import {changeLoadingStatus, fetchHotels, setHotels} from '../store/app-process/app-process';
import {store} from '../store';
import {CURRENCY, LIMIT, LoadingStatus, NameSpace} from '../const/const';
import {AxiosResponse} from 'axios';

const fetchHotelsData = () => {
  const {location, checkIn, duration} = store.getState()[NameSpace.AppProcess];
  const date = new Date(checkIn);
  date.setDate(date.getDate() + duration);

  const checkOut = date.toLocaleDateString('en-CA');

  const data = api.get<Hotel[]>('cache.json', {
    params: {
      location,
      currency: CURRENCY,
      checkIn,
      checkOut,
      limit: LIMIT,
    },
  });

  return data;
};

function* fetchHotelsWorker() {
  try {
    const response: AxiosResponse = yield call(fetchHotelsData);

    if (response.status === 200) {
      yield put(setHotels(response.data));
    } else {
      yield put(changeLoadingStatus(LoadingStatus.Rejected));
      throw new Error(response.statusText);
    }
  } catch {
    throw Error('fetching error');
  }
}

export function* hotelsWatcher() {
  yield takeEvery(fetchHotels.type, fetchHotelsWorker);
}
