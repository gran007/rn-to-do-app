/**
 * @format
 */

import 'react-native';
import React from 'react';
import Todo from '@todo/pages/02.todo';
import { store } from '@todo/redux'
import { Provider } from 'react-redux';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const rendered = renderer.create(
    <Provider store={store}>
      <Todo />
    </Provider>);
  expect(rendered).toBeTruthy();
});

it('App Snapshot', () => {
  const snap = renderer.create(
    <Provider store={store}>
      <Todo />
    </Provider>).toJSON();
  expect(snap).toMatchSnapshot();
});