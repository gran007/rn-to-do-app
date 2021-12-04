import { createSlice } from '@reduxjs/toolkit';
import { CommonState } from '@todo/interfaces';

const initialState: CommonState = {
  loader: false,
};

const CommonSlice = createSlice({
  name: 'Common',
  initialState,
  reducers: {
    showLoader: state => {
      state.loader = true;
    },
    hideLoader: state => {
      state.loader = false;
    },
  },
});

export const reducer = CommonSlice.reducer;
export const actions = CommonSlice.actions;
