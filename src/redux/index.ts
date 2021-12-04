import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { reducer as commonReducer, actions as CommonActions } from './reducers/CommonSlice';
const actions = {
  common: CommonActions
}
export { actions };


export const store = configureStore({
  reducer: combineReducers({
    common: commonReducer,
  })
});

export type RootState = ReturnType<typeof store.getState>;
