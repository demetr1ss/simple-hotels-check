import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const/const';

export type UserProcessType = {
  authorizationStatus: AuthorizationStatus;
};

const initialState: UserProcessType = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const appProcess = createSlice({
  name: 'appProcess',
  initialState,
  reducers: {},
  extraReducers: {}
});
