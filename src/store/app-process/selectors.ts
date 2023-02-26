import {createSelector} from '@reduxjs/toolkit';
import {LoadingStatus, NameSpace} from '../../const/const';
import {StateType} from '../../types/state-type';
import {HotelType} from '../../types/types';
import {sortOffers} from '../../utils/utils';

export const getHotels = (state: StateType): HotelType[] => state[NameSpace.AppProcess].hotels;

export const getHotelsLoadingStatus = (state: StateType): LoadingStatus =>
  state[NameSpace.AppProcess].hotelsLoadingStatus;

export const getLocation = (state: StateType): string => state[NameSpace.AppProcess].location;

export const getCheckIn = (state: StateType): string => state[NameSpace.AppProcess].checkIn;

export const getDuration = (state: StateType): string => state[NameSpace.AppProcess].duration;

export const getPhotos = (state: StateType): string[] => state[NameSpace.AppProcess].photos;

export const getFavoriteHotels = (state: StateType): HotelType[] => state[NameSpace.AppProcess].favoriteHotels;

export const getSortType = (state: StateType): string => state[NameSpace.AppProcess].sortType;


export const getSortedFavoriteHotels = createSelector(getFavoriteHotels, getSortType, (hotels, sortType) =>
  sortOffers(hotels, sortType)
);
