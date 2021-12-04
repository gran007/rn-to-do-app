import React, { FC, useCallback, useState, createRef, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { TodoStyles as styles, Images } from '@todo/styles'
import Strings from '@todo/strings';
import { TODO_TYPES } from '@todo/constants';
import { DialogRefProps, TodoListItemProps, TodoProps } from '@todo/interfaces'
import TodoItem from './01.todo-item'
import BottomDialog from './02.bottom-dialog'

const tempInBoxList: TodoListItemProps[] = [
  {
    title: `Test Todo 3`,
    content: `TODO App용 서버 구현하기

    -Node.js
    -GraphQL
    Postgree
    -TypeORM`,
  },
]

const tempDoneList: TodoListItemProps[] = [
  {
    title: `Test Todo 2`,
    content: `React Native Todo App 만들기`,
  }
]

const Todo: FC<TodoProps> = (props) => {
  const { navigation } = props;
  const bottomDialogRef = createRef<DialogRefProps>();
  const [selectedItem, setSelectedItem] = useState<TodoListItemProps | null>(tempInBoxList[0]);
  const [inBoxList, setInBoxList] = useState(tempInBoxList)
  const [doneList, setDoneList] = useState(tempDoneList)
  const onGoBack = useCallback(() => {
    navigation.navigate('login');
  }, []);
  const onClickCheckInBoxItem = useCallback((index: number) => {
    const item: TodoListItemProps = inBoxList.splice(index, 1)[0];
    setInBoxList([...inBoxList]);
    setDoneList([...doneList, item]);
  }, [inBoxList, doneList]);
  const onPressItem = useCallback((item: TodoListItemProps, index: number) => {
    console.log(item, index);
    setSelectedItem(item);
  }, []);
  const onAddItem = useCallback((item: TodoListItemProps)=> {
    setInBoxList([...inBoxList, item]);
  }, [inBoxList]);
  useEffect(() => {
    bottomDialogRef.current?.show();
  }, [bottomDialogRef.current]);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.logo}
            onPress={onGoBack}>
            {Images.headerLogo}
          </TouchableOpacity>
          <Text style={styles.headerText}>{Strings.TODO_INBOX}</Text>
        </View>
        <FlatList
          keyboardShouldPersistTaps='handled'
          data={inBoxList}
          keyExtractor={(_, index: number) => `todoItem_${index}`}
          renderItem={({ item, index }: { item: TodoListItemProps, index: number }) => {
            const isLast = index + 1 === inBoxList.length;
            return <TodoItem
              index={index}
              title={item.title}
              isDone={false}
              content={item.content}
              isLast={isLast}
              onClickCheck={onClickCheckInBoxItem}
              onPressItem={onPressItem}
            />
          }}
        />
      </View>
      {
        <BottomDialog 
          ref={bottomDialogRef}
          onAdd={onAddItem} />
      }
    </>
  )
}

export default Todo;