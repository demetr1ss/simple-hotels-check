import {createSlice} from '@reduxjs/toolkit';
import {LoadingStatus, NameSpace} from '../../const/const';
import {Hotel} from '../../types/types';

const INITIAL_CITY = 'Москва';
const INITIAL_DURATION = '1';
const INITIAL_CHECKIN = new Date().toLocaleDateString('en-CA');
const PHOTOS = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg', 'img/img-4.jpg'];

type AppProcessType = {
  hotels: Hotel[];
  hotelsLoadingStatus: LoadingStatus;
  location: string;
  checkIn: string;
  duration: string;
  photos: string[];
};

const initialState: AppProcessType = {
  hotels: [],
  hotelsLoadingStatus: LoadingStatus.Idle,
  location: INITIAL_CITY,
  checkIn: INITIAL_CHECKIN,
  duration: INITIAL_DURATION,
  photos: PHOTOS,
};

export const appProcess = createSlice({
  name: NameSpace.AppProcess,
  initialState,
  reducers: {
    setQueryParams: (state, action) => {
      const {location, checkIn, duration} = action.payload;
      state.location = location;
      state.checkIn = checkIn;
      state.duration = duration;
    },
    fetchHotels: (state) => {
      state.hotelsLoadingStatus = LoadingStatus.Pending;
    },
    setHotels: (state, action) => {
      state.hotels = action.payload;
      state.hotelsLoadingStatus = LoadingStatus.Fulfilled;
    },
    changeLoadingStatus: (state, action) => {
      state.hotelsLoadingStatus = action.payload;
    },
  },
});

export const {fetchHotels, setQueryParams, setHotels, changeLoadingStatus} = appProcess.actions;
