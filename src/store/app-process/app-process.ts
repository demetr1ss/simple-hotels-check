import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const/const';


const initialState = {
};

export const appProcess = createSlice({
  name: NameSpace.appProcess,
  initialState,
  reducers: {},
  extraReducers: {}
});
