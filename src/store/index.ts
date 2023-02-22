import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api';
import {appProcess} from './app-process/app-process';
import {redirect} from './middlewares/redirect';

export const api = createAPI();

export const store = configureStore({
  reducer: appProcess.reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
