import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const sliceName = 'errorSlice';

type InitialState = {
  message: string | null;
  code: number | null;
};

const initialState: InitialState = {
  message: null,
  code: null,
};

const errorSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setError: (state, { payload }: PayloadAction<{ message: string; code: number }>) => {
      state.message = payload.message;
      state.code = payload.code;
    },
    clearError: state => {
      state.message = null;
      state.code = null;
    },
  },
});

export default errorSlice;
