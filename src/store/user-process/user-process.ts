import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthorizationStatus, NameSpace} from '../../const/const';
import {dropToken, saveToken} from '../../services/token';

export type UserProcessType = {
  authorizationStatus: AuthorizationStatus;
};

const initialState: UserProcessType = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userProcess = createSlice({
  name: NameSpace.UserProcess,
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<string>) => {
      saveToken(action.payload);
      state.authorizationStatus = AuthorizationStatus.Auth;
    },
    logOut: (state) => {
      dropToken();
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    },
  },
});

export const {logIn, logOut} = userProcess.actions;
