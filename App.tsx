import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@todo/redux'
import Navigator from '@todo/app-navigator'
import {LoadIndicator} from '@todo/components'


export default function App() {
  return (
    <Provider store={store}>      
      <Navigator />
      <LoadIndicator/>
    </Provider>
  )
};
