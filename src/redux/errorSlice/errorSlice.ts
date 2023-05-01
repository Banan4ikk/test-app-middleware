import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const sliceName = 'errorSlice';

type InitialState = {
  error: string | null;
  code: number | null;
};

const initialState: InitialState = {
  error: null,
  code: null,
};

const errorSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setError: (state, { payload }: PayloadAction<{ error: string; code: number }>) => {
      state.error = payload.error;
      state.code = payload.code;
    },
    clearError: state => {
      state.error = null;
      state.code = null;
    },
  },
});

export default errorSlice;
