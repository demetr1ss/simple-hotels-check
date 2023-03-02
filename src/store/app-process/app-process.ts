import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoadingStatus, NameSpace, SortingOption} from '../../const/const';
import {HotelType, QueryParamsType} from '../../types/types';

const INITIAL_CITY = 'Москва';
const INITIAL_DURATION = 1;
const INITIAL_CHECKIN = String(new Date());
const PHOTOS = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg', 'img/img-4.jpg'];

type AppProcessType = {
  hotels: HotelType[];
  favoriteHotels: HotelType[];
  hotelsLoadingStatus: LoadingStatus;
  location: string;
  checkIn: string;
  duration: number;
  photos: string[];
  sortType: string;
};

const initialState: AppProcessType = {
  hotels: [],
  favoriteHotels: [],
  hotelsLoadingStatus: LoadingStatus.Idle,
  location: INITIAL_CITY,
  checkIn: INITIAL_CHECKIN,
  duration: INITIAL_DURATION,
  photos: PHOTOS,
  sortType: SortingOption.Default,
};

export const appProcess = createSlice({
  name: NameSpace.AppProcess,
  initialState,
  reducers: {
    setQueryParams: (state, action: PayloadAction<QueryParamsType>) => {
      const {location, checkIn, duration} = action.payload;
      state.location = location;
      state.checkIn = checkIn;
      state.duration = Number(duration);
    },
    fetchHotels: (state) => {
      state.hotelsLoadingStatus = LoadingStatus.Pending;
    },
    setHotels: (state, action: PayloadAction<HotelType[]>) => {
      state.hotels = action.payload;
      state.hotelsLoadingStatus = LoadingStatus.Fulfilled;
    },
    changeLoadingStatus: (state, action: PayloadAction<LoadingStatus>) => {
      state.hotelsLoadingStatus = action.payload;
    },
    changeFavoriteHotelStatus: (state, action: PayloadAction<HotelType>) => {
      const id = action.payload.hotelId;

      state.hotels = state.hotels.map((hotel) =>
        hotel.hotelId === id ? {...hotel, isFavorite: !hotel.isFavorite} : hotel
      );

      const currentHotel = state.hotels.find(({hotelId}) => hotelId === id);

      if (action.payload.isFavorite) {
        state.favoriteHotels = state.favoriteHotels.filter((hotel) => hotel.hotelId !== id);
      } else {
        state.favoriteHotels.push(currentHotel as HotelType);
      }
    },
    changeSort: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const {
  fetchHotels,
  setQueryParams,
  setHotels,
  changeLoadingStatus,
  changeFavoriteHotelStatus,
  changeSort,
} = appProcess.actions;
