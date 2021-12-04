import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '@todo/interfaces';

const initialState: AuthState = {
  userId: undefined,
};

const slice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
