import { rootState } from '../store';

export const selectToken = (state: rootState) => state.auth.token;
