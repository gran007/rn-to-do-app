import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@todo/redux'
import Navigator from '@todo/app-navigator'


export default function App() {
  return (
    <Provider store={store}>      
      <Navigator />
    </Provider>
  )
};
