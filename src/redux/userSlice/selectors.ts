import { rootState } from '../store';

export const selectUserInfo = (state: rootState) => state.user.userInfo;
