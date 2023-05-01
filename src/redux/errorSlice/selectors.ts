import { rootState } from '../store';

const selectError = (state: rootState) => state.error.error;

const selectErrorCode = (state: rootState) => state.error.code;
