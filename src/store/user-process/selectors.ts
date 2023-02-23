import {AuthorizationStatus, NameSpace} from '../../const/const';
import {StateType} from '../../types/state-type';

export const getAuthorizationStatus = (state: StateType): AuthorizationStatus =>
  state[NameSpace.userProcess].authorizationStatus;
