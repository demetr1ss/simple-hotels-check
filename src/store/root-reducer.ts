import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const/const';
import {appProcess} from './app-process/app-process';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.userProcess]: userProcess.reducer,
  [NameSpace.appProcess]: appProcess.reducer,
});
