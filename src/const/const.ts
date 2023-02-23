export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
}

export const enum AppRoute {
  Main = '/',
  Login = '/login',
}

export const emailRegExp = new RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
);

export const NameSpace = {
  userProcess: 'USER-PROCESS',
  appProcess: 'APP-PROCESS'
} as const;
