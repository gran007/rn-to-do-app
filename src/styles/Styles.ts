import { StyleSheet } from 'react-native';
import { Colors } from './Colors';
import { scale, verticalScale, statusBarHeight } from './Scaling';
import { CS } from './CommonStyles';

export const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    ...CS.centerHorizontal,
    paddingTop: verticalScale(64),
  },
  logoTitle: {
    fontSize: 32,
  },
  logo: {
    width: scale(74),
    height: scale(74),
  }
});

export const TodoStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});