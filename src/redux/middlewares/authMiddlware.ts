import { AnyAction, Dispatch, Middleware } from 'redux';
import errorSlice from '../errorSlice/errorSlice';
import authSlice from '../auth/slice';

import { DecodeJWTType } from '../auth/types';
// import { decodeToken } from 'react-jwt';
import jwt_decode from 'jwt-decode';

export const authMiddleware =
  () =>
  (next: Dispatch) =>
  (action: AnyAction): AnyAction => {
    next(errorSlice.actions.clearError());
    if (action.type.includes('fulfilled')) {
      if (!action.payload.ok) {
        return next(errorSlice.actions.setError({ message: action.payload.msg, code: action.payload.code }));
      }
    }
    if (action.type.includes('logout')) {
      next(authSlice.actions.logout());
    }
    if (action.payload?.accessToken) {
      const decode = jwt_decode<DecodeJWTType>(action.payload.accessToken);
      next(authSlice.actions.setUserInfo({ uid: decode.sub, roles: decode.roles }));
    }

    return next(action);
  };
