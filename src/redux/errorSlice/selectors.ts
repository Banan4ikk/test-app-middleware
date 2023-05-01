import { rootState } from '../store';

export const selectError = (state: rootState) => state.error.message;

export const selectErrorCode = (state: rootState) => state.error.code;
