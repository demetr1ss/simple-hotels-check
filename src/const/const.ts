export const CURRENCY = 'rub';
export const LIMIT = '20';
export const LANG = 'ru';

export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const enum AppRoute {
  Main = '/',
  Login = '/login',
}

export const emailRegExp = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export const passwordRegExp = new RegExp(/^[a-zA-Z0-9]+$/);

export const NameSpace = {
  UserProcess: 'USER-PROCESS',
  AppProcess: 'APP-PROCESS',
} as const;

export const enum LoadingStatus {
  Idle = 'IDLE',
  Pending = 'PENDING',
  Fulfilled = 'FULFILLED',
  Rejected = 'REJECTED',
}

export const enum SortingOption {
  Default = 'DEFAULT',
  AscendingPrice = 'Price: low to high',
  DescendingPrice = 'Price: high to low',
  DescendingRating = 'Top rated first',
  AscendingRating = 'Top rated last',
}
