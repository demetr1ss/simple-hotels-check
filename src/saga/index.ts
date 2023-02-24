import {all} from 'redux-saga/effects';
import {hotelsWatcher} from './hotels-saga';

export function* rootWatcher() {
  yield all([hotelsWatcher()]);
}
