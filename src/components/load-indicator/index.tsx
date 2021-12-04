import React, { FC } from 'react';
import { Colors } from '@todo/styles';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { MaterialIndicator } from 'react-native-indicators';
import { RootState } from '@todo/redux';

const LoadIndicator: FC<{}> = () => {
  const { loader } = useSelector((state: RootState) => state.common);
  if (!loader) {
    return (<View />);
  }
  return (
    <View style={styles.loading}>
      <MaterialIndicator
        animationDuration={1000}
        color={Colors.brownishGrey} />
    </View>);
}

export default LoadIndicator;

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  }
});
