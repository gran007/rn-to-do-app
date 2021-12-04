import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { LoginStyles as styles, Images } from '@todo/styles';

const Login: FC<{}> = (props) => {
  return (
    <View style={styles.container}>
      {Images.logo}
      <Text style={{ color: 'black', borderWidth: 1, borderColor: 'black' }}>{'Login'}</Text>
    </View>
  )
}

export default Login;