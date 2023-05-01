import { AnyAction, Dispatch } from 'redux';
import errorSlice from '../errorSlice/errorSlice';

export const authMiddleware =
  () =>
  (dispatch: Dispatch) =>
  (action: AnyAction): AnyAction => {
    dispatch(errorSlice.actions.clearError());
    if (action.type.includes('fulfilled')) {
      if (!action.payload.ok) {
        return dispatch(errorSlice.actions.setError({ message: action.payload.msg, code: action.payload.code }));
      }
    }

    return dispatch(action);
  };
