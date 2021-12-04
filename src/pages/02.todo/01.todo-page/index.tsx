import React, { FC } from 'react';
import { View, FlatList } from 'react-native';
import { TodoPageStyles as styles } from '@todo/styles';
import Strings from '@todo/strings';
import { TodoListItemProps, TodoPageProps } from '@todo/interfaces';
import TodoItem from './02.todo-item';
import Header from './01.header';

const TodoPage: FC<TodoPageProps> = (props) => {  
  const { onGoBack, list, onClickCheck, onPressItem, isDone } = props;
  return (
    <View style={styles.swiperPage}>
      <Header onGoBack={onGoBack} title={Strings.TODO_INBOX} />
      <FlatList
        refreshing={false}
        onRefresh={() => { }}
        keyboardShouldPersistTaps='handled'
        data={list}
        keyExtractor={(_, index: number) => `todoItem_${index}`}
        renderItem={({ item, index }: { item: TodoListItemProps, index: number }) => {
          const isLast = index + 1 === list.length;
          return <TodoItem
            index={index}
            title={item.title}
            isDone={isDone}
            content={item.content}
            isLast={isLast}
            onClickCheck={onClickCheck}
            onPressItem={() => onPressItem(item, index)}
          />
        }}
      />
    </View>
  )
}

export default TodoPage;