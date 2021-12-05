import 'react-native';
import React from 'react';
import Todo from '@todo/pages/02.todo';
import { render, fireEvent, act, mount } from "@testing-library/react-native";
import { store } from '@todo/redux'
import { Provider } from 'react-redux';

describe("TODO 테스트", () => {

  it('데이터 삽입 테스트', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Todo />
      </Provider>
    );
    const plusButton = getByTestId('plugButton');
    const titleInput = getByTestId('titleInput');
    const contentInput = getByTestId('contentInput');
    const addButton = getByTestId('addButton');  

    fireEvent(plusButton, 'onPress');
    fireEvent(titleInput, 'onChangeText', 'TEST');
    fireEvent(contentInput, 'onChangeText', '테스트 중 입니다.');
    fireEvent(addButton, 'onPress');
    const titleText = getByTestId('inbox_title_0');
    const contentText = getByTestId('inbox_content_0');
    expect(titleText.props.children).toBe('TEST');
    expect(contentText.props.children).toBe('테스트 중 입니다.');    
  })

  it('데이터 수정 테스트', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Todo defaultInBox={[{title: 'TEST', content: '테스트1'}]} />
      </Provider>
    );
    const titleText = getByTestId('inbox_title_0');
    const contentText = getByTestId('inbox_content_0');  
    expect(titleText.props.children).toBe('TEST');
    expect(contentText.props.children).toBe('테스트1');

    const item = getByTestId('inbox_0');
    fireEvent(item, 'onPress');
    const titleInput = getByTestId('titleInput');
    const contentInput = getByTestId('contentInput');  
    const updateButton = getByTestId('updateButton');        
    fireEvent(titleInput, 'onChangeText', 'TEST2');
    fireEvent(contentInput, 'onChangeText', '테스트2');
    fireEvent(updateButton, 'onPress');

    expect(titleText.props.children).toBe('TEST2');
    expect(contentText.props.children).toBe('테스트2');
  })

  it('데이터 삭제 테스트', async () => {
    const { getByTestId, queryByTestId } = render(
      <Provider store={store}>
        <Todo defaultInBox={[{title: 'TEST', content: '테스트1'}]} />
      </Provider>
    );
    const item = getByTestId('inbox_0');
    fireEvent(item, 'onPress');
    const deleteButton = getByTestId('deleteButton');        
    fireEvent(deleteButton, 'onPress');
    const titleText = queryByTestId('inbox_title_0');
    expect(titleText).toBeNull();
    
  });
});

