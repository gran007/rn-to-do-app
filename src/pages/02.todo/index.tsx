import React, { FC, useCallback, useState, createRef, useMemo } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { TodoStyles as styles } from '@todo/styles'
import Strings from '@todo/strings';
import { TAB_TYPE } from '@todo/constants';
import { DialogRefProps, TodoListItemProps, TodoProps } from '@todo/interfaces'
import TodoItem from './02.todo-item'
import BottomDialog from './03.bottom-dialog'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Header from './01.header'

const tempInBoxList: TodoListItemProps[] = [
  {
    title: `Test Todo 3`,
    content: `TODO App용 서버 구현하기

    -Node.js
    -GraphQL
    Postgree
    -TypeORM`,
  },
  {
    title: `Test Todo 1`,
    content: `TEST`,
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
  const swiperRef = createRef<Swiper>();
  const [selectedItem, setSelectedItem] = useState<TodoListItemProps | null>(tempInBoxList[0]);
  const [inBoxList, setInBoxList] = useState(tempInBoxList);
  const [doneList, setDoneList] = useState(tempDoneList);
  const [tabIndex, setTabIndex] = useState(0);
  const onGoBack = useCallback(() => {
    navigation.navigate('login');
  }, [navigation]);
  const onClickCheckInBoxItem = useCallback((index: number) => {
    const item: TodoListItemProps = inBoxList.splice(index, 1)[0];
    setInBoxList([...inBoxList]);
    setDoneList([...doneList, item]);
  }, [inBoxList, doneList]);
  const onClickCheckDoneItem = useCallback((index: number) => {
    const item: TodoListItemProps = doneList.splice(index, 1)[0];
    setDoneList([...doneList]);
    setInBoxList([item, ...inBoxList]);
  }, [inBoxList, doneList]);
  const onPressItem = useCallback((item: TodoListItemProps, index: number) => {
    setSelectedItem(item);
  }, []);
  const onAddItem = useCallback((item: TodoListItemProps) => {
    setInBoxList([...inBoxList, item]);
  }, [inBoxList]);
  const onClickTab = useCallback((index: number) => {
    swiperRef.current?.scrollBy(index - tabIndex);
  }, [swiperRef, swiperRef.current, tabIndex]);
  // useEffect(() => {
  //   bottomDialogRef.current?.show();
  // }, [bottomDialogRef.current]);
  const title = useMemo(() => tabIndex === TAB_TYPE.INBOX ? Strings.TODO_INBOX : Strings.TODO_DONE, [tabIndex]);
  return (
    <>
      <View style={styles.container}>
        <Swiper
          removeClippedSubviews={false}
          loop={false}
          index={tabIndex}
          ref={swiperRef}
          dotStyle={styles.swiperDotStyle}
          activeDotStyle={styles.swiperDotStyle}
          onIndexChanged={(index: number) => setTabIndex(index)}>
          <View style={styles.swiperPage}>
            <Header onGoBack={onGoBack} title={Strings.TODO_INBOX} />
            <FlatList
              refreshing={false}
              onRefresh={() => { }}
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
          <View style={styles.swiperPage}>
            <Header onGoBack={onGoBack} title={Strings.TODO_DONE} />
            <FlatList
              refreshing={false}
              onRefresh={() => { }}
              keyboardShouldPersistTaps='handled'
              data={doneList}
              keyExtractor={(_, index: number) => `todoItem_${index}`}
              renderItem={({ item, index }: { item: TodoListItemProps, index: number }) => {
                const isLast = index + 1 === doneList.length;
                return <TodoItem
                  index={index}
                  title={item.title}
                  isDone={true}
                  content={item.content}
                  isLast={isLast}
                  onClickCheck={onClickCheckDoneItem}
                  onPressItem={onPressItem}
                />
              }}
            />
          </View>
        </Swiper>

        <View style={styles.tabBar}>
          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => onClickTab(TAB_TYPE.INBOX)}>
            <Icon name='inbox' size={32} color={tabIndex === TAB_TYPE.INBOX ? Colors.black : Colors.blueGrey} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => onClickTab(TAB_TYPE.DONE)}>
            <Icon name='check-square' size={32} color={tabIndex === TAB_TYPE.DONE ? Colors.black : Colors.blueGrey} />
          </TouchableOpacity>
        </View>
        <BottomDialog
          ref={bottomDialogRef}
          onAdd={onAddItem} />
      </View>
    </>
  )
}

export default Todo;