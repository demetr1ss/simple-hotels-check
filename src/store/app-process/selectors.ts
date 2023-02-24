import {LoadingStatus, NameSpace} from '../../const/const';
import {StateType} from '../../types/state-type';
import {Hotel} from '../../types/types';

export const getHotels = (state: StateType): Hotel[] => state[NameSpace.AppProcess].hotels;

export const getHotelsLoadingStatus = (state: StateType): LoadingStatus =>
  state[NameSpace.AppProcess].hotelsLoadingStatus;

export const getLocation = (state: StateType): string =>
  state[NameSpace.AppProcess].location;

export const getCheckInDate = (state: StateType): string =>
  state[NameSpace.AppProcess].checkIn;

export const getDuration = (state: StateType): string =>
  state[NameSpace.AppProcess].duration;
