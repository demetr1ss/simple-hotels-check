import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus, NameSpace} from '../../const/const';
import {dropToken, saveToken} from '../../services/token';

export type UserProcessType = {
  authorizationStatus: AuthorizationStatus;
};

const initialState: UserProcessType = {
  authorizationStatus: AuthorizationStatus.NoAuth,
};

export const userProcess = createSlice({
  name: NameSpace.userProcess,
  initialState,
  reducers: {
    logIn: (state, action) => {
      const payload = action.payload as string;
      saveToken(payload);
      state.authorizationStatus = AuthorizationStatus.Auth;
    },
    logOut: (state) => {
      dropToken();
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    }
  },
});

export const {logIn, logOut} = userProcess.actions;
