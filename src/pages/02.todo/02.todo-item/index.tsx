import React, { FC, useCallback, useRef, useMemo } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import { TodoItemStyles as styles, Colors, scale } from '@todo/styles'
import { TodoItemProps } from '@todo/interfaces'
import Icon from 'react-native-vector-icons/FontAwesome';

const TodoItem: FC<TodoItemProps> = (props) => {
  const { title, content, isDone, index, onPressItem, onClickCheck } = props;
  const translateX = useRef(new Animated.Value(0)).current
  const onPressCheckbox = () => {
    Animated.timing(
      translateX,
      {
        toValue: scale(360),
        duration: 500,
        useNativeDriver: false,
        easing: Easing.cubic,
      }
    ).start(()=> { 
      translateX.setValue(0);
      onClickCheck(index);
    });
  };
  const iconName = useMemo(() => isDone ?  'check-square' : 'square-o', [isDone]);
  return (
    <TouchableOpacity activeOpacity={1} style={styles.container}>
      <Animated.View style={[styles.item, {
        transform: [{ translateX }]
      }]}>
        <View style={styles.title}>
          <TouchableOpacity
            onPress={onPressCheckbox}>
            <Icon name={iconName} size={32} color={Colors.brownishGrey} />
          </TouchableOpacity>
          <Text style={[styles.titleText, isDone && styles.titleDoneText]}>{title}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  )
}

export default TodoItem;