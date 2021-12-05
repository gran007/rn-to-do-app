/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Login from '@todo/pages/01.login';
import { render, fireEvent } from "@testing-library/react-native";
import Strings from '@todo/strings'
import { store } from '@todo/redux'
import { Provider } from 'react-redux';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const rendered = renderer.create(<App />);
  expect(rendered).toBeTruthy();
});

it('App Snapshot', () => {
  const snap = renderer.create(<App />).toJSON();
  expect(snap).toMatchSnapshot();
});

const getElement = () => {
  const { getByTestId } = render(
    <App/>
  );
  const emailInput = getByTestId('emailInput');
  const errorText = getByTestId('errorText');
  const passwordInput = getByTestId('passwordInput');
  const loginButton = getByTestId('loginButton');
  return { emailInput, errorText, passwordInput, loginButton };
}

describe("로그인 테스트", () => {
  
  it('이메일 유효성 실패 검증', () => {
    const { emailInput, errorText } = getElement();
    fireEvent(emailInput, 'onChangeText', 'test@test');
    expect(errorText.props.children).toBe(Strings.EMAIL_ERROR)
  })

  it('이메일 유효성 검증', () => {
    const { emailInput, errorText } = getElement();
    fireEvent(emailInput, 'onChangeText', 'test@test.com');
    expect(errorText.props.children).toBe('')
  })

  it('로그인 실패', () => {
    const { emailInput, errorText, passwordInput, loginButton } = getElement();
    fireEvent(emailInput, 'onChangeText', 'test@test.com');
    fireEvent(passwordInput, 'onChangeText', '123');
    fireEvent(loginButton, 'onPress');
    expect(errorText.props.children).toBe(Strings.LOGIN_ERROR)
  })

  it('로그인 성공', () => {
    const { emailInput, errorText, passwordInput, loginButton } = getElement();
    fireEvent(emailInput, 'onChangeText', 'test@test.com');
    fireEvent(passwordInput, 'onChangeText', '1234');
    fireEvent(loginButton, 'onPress');
    // expect(errorText.props.children).toBe(Strings.LOGIN_ERROR)
  })

});

