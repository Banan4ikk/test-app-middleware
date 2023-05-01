import { AnyAction, Dispatch } from 'redux';

import { http } from '../../services/http';

export const authMiddleware =
  () =>
  (next: Dispatch) =>
  (action: AnyAction): AnyAction => {
    // if (action.payload?.accessToken) {
    //   // http.setAuthorizationHeader(action.payload.accessToken);
    // }

    if (action.type.includes('fulfilled')) {
      if (action.payload.code === 1000) {
        Promise.reject('not authed').then(res => {
          console.log('err', res);
        });
      } else if (action.payload.code === 1011) {
        Promise.reject('user locked').then(res => {
          console.log('err', res);
        });
      }
    }

    return next(action);
  };
