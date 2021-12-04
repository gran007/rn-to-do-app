import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Fonts } from './Fonts'

export const CS = StyleSheet.create({
  font14: {
    fontFamily: Fonts.reguler,
    fontSize: 14,
    color: Colors.black,
  },
  font18: {
    fontFamily: Fonts.reguler,
    fontSize: 18,
    color: Colors.black,
  },
  font18Bold: {
    fontFamily: Fonts.bold,
    fontSize: 18,
    color: Colors.black,
  },
  font24Bold: {
    fontFamily: Fonts.bold,
    fontSize: 24,
    color: Colors.black,
  },
  font32Bold: {
    fontFamily: Fonts.bold,
    fontSize: 32,
    color: Colors.black,
  },
  centerAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerVertical: {
    justifyContent: 'center',
  },
  centerHorizontal: {
    alignItems: 'center',
  },
  centerVerticalRow: {
    alignItems: 'center',
  },
  centerHorizontalRow: {
    justifyContent: 'center',
  },
});