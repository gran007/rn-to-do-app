import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { TodoStyles as styles } from '@todo/styles'

const Todo: FC<{}> = (props) => {
  return (
    <View style={styles.container}>
      <Text>{'Todo'}</Text>
    </View>
  )
}

export default Todo;