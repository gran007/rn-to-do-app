import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { HeaderStyles as styles, Images } from '@todo/styles'
import { HeaderProps } from '@todo/interfaces'


const Header: FC<HeaderProps> = (props) => {
  const { onGoBack, title } = props;
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.logo}
        onPress={onGoBack}>
        {Images.headerLogo}
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

export default Header;