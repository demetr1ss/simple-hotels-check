/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import browserHistory from '../../components/browser-history';
import { Middleware } from 'redux';
import {appProcess} from '../app-process/app-process';
import {AppRoute} from '../../const/const';

type Reducer = ReturnType<typeof appProcess.reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === 'Route/redirectToRoute') {
          browserHistory.push(action.payload as AppRoute);
        }

        return next(action);
      };
