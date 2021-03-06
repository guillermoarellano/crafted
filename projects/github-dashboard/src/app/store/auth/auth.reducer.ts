import {createSelector} from '@ngrx/store';
import {CAN_AUTH} from '../../firebase.config';
import {AppState} from '../index';
import {AuthAction, AuthActionTypes} from './auth.action';
import {AuthState} from './auth.state';

export type GithubAuthScope = 'gist'|'repo';

const initialState: AuthState = {
  userName: window.localStorage.getItem('user') || '',
  accessToken: window.localStorage.getItem('accessToken') || '',
  scopes: (window.localStorage.getItem('accessToken') || '').split(','),
  canAuth: CAN_AUTH,
};

export function authActionReducer(state: AuthState = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionTypes.SIGN_IN_SUCCESS:
      return {...state, ...action.payload};

    case AuthActionTypes.SIGN_OUT_SUCCESS:
      return {...state, userName: '', accessToken: '', scopes: []};

    case AuthActionTypes.UPDATE_SCOPES:
      const scopesSet = new Set(action.payload.scopes);  // de-depe entries
      return {...state, scopes: Array.from(scopesSet)};

    default:
      return state;
  }
}

export const selectAuthState = (state: AppState) => state.auth;
export const selectIsAuthenticated =
    createSelector(selectAuthState, authState => !!authState.accessToken);
export const selectUserName = createSelector(selectAuthState, authState => authState.userName);
export const selectCanAuth = createSelector(selectAuthState, authState => authState.canAuth);

export const selectHasScope = (scope: string) =>
    createSelector(selectAuthState, authState => authState.scopes.indexOf(scope) !== -1);
