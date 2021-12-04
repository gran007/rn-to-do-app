import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { reducer as commonReducer, actions as commonActions } from './reducers/Common';
import { reducer as authReducer, actions as authActions } from './reducers/Auth';
const actions = {
  auth: authActions,
  common: commonActions,
}
export { actions };


export const store = configureStore({
  reducer: combineReducers({
    common: commonReducer,
    auth: authReducer,
  })
});

export type RootState = ReturnType<typeof store.getState>;
