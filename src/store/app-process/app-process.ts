import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoadingStatus, NameSpace} from '../../const/const';
import {Hotel, QueryParamsType} from '../../types/types';

const INITIAL_CITY = 'Москва';
const INITIAL_DURATION = '1';
const INITIAL_CHECKIN = new Date().toLocaleDateString('en-CA');
const PHOTOS = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg', 'img/img-4.jpg'];

type AppProcessType = {
  hotels: Hotel[];
  favoriteHotels: Hotel[];
  hotelsLoadingStatus: LoadingStatus;
  location: string;
  checkIn: string;
  duration: string;
  photos: string[];
};

const initialState: AppProcessType = {
  hotels: [],
  favoriteHotels: [],
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
    setQueryParams: (state, action: PayloadAction<QueryParamsType>) => {
      const {location, checkIn, duration} = action.payload;
      state.location = location;
      state.checkIn = checkIn;
      state.duration = duration;
    },
    fetchHotels: (state) => {
      state.hotelsLoadingStatus = LoadingStatus.Pending;
    },
    setHotels: (state, action: PayloadAction<Hotel[]>) => {
      state.hotels = action.payload;
      state.hotelsLoadingStatus = LoadingStatus.Fulfilled;
    },
    changeLoadingStatus: (state, action: PayloadAction<LoadingStatus>) => {
      state.hotelsLoadingStatus = action.payload;
    },
    changeFavoriteHotelStatus: (state, action: PayloadAction<Hotel>) => {
      const id = action.payload.hotelId;

      state.hotels = state.hotels.map((hotel) =>
        hotel.hotelId === id ? {...hotel, isFavorite: !hotel.isFavorite} : hotel
      );

      const currentHotel = state.hotels.find(({hotelId}) => hotelId === id);

      if (action.payload.isFavorite) {
        state.favoriteHotels = state.favoriteHotels.filter((hotel) => hotel.hotelId !== id);
      } else {
        state.favoriteHotels.push(currentHotel as Hotel);
      }
    },
  },
});

export const {fetchHotels, setQueryParams, setHotels, changeLoadingStatus, changeFavoriteHotelStatus} =
  appProcess.actions;
