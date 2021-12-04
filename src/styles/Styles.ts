import { StyleSheet } from 'react-native';
import { Colors } from './Colors';
import { scale, verticalScale, statusBarHeight } from './Scaling';
import { CS } from './CommonStyles';

export const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },  
  scrollView: {
    flex: 1,
  },
  main: {
    flex: 1,
    ...CS.centerHorizontal,
    ...CS.centerVertical,
  },
  logo: {
    marginTop: verticalScale(48),
    marginBottom: verticalScale(32),
    ...CS.centerHorizontal,
  },
  logoTitle: {
    ...CS.font32Bold,
    marginBottom: verticalScale(16),
  },
  form: {
    position: 'relative',
  },
  error: {
    position: 'absolute',
    left: scale(8),
    top: verticalScale(52),
  },
  errorText: {
    ...CS.font14,
    color: Colors.orangeyRed,
  },
  textInput: {
    ...CS.font18,
    width: scale(320 - 32),
    height: scale(52),
    borderRadius: scale(8),
    borderColor: Colors.black,
    borderWidth: 1,
    marginBottom: verticalScale(24),
  },
  loginButton: {
    width: scale(320 - 32),
    height: scale(52),
    borderRadius: scale(8),
    ...CS.centerAlign,
    backgroundColor: Colors.twilightBlue,
    marginTop: verticalScale(16),
    marginBottom: verticalScale(32),
  },
  buttonDisabled: {
    backgroundColor: Colors.lightBlueGrey,
  },
  loginText: {
    ...CS.font18,
    color: Colors.white,
  }
});

export const HeaderStyles = StyleSheet.create({
  header: {
    ...CS.centerVertical,
    width: '100%',
    height: scale(56),
    // paddingLeft: scale(8),
  },
  headerText: {
    position: 'absolute',
    alignSelf: 'center',
    ...CS.font18,
  },
  logo: {
    width: scale(56),
    height: scale(56),
    ...CS.centerAlign,
  },
});

export const TodoStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  sliderContainer: {
    width: '100%',
    height: 100,
    backgroundColor: Colors.brownishGrey,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: verticalScale(80),
    borderTopWidth: 1,
    borderColor: Colors.brownishGrey,
    backgroundColor: Colors.lightWhite,
  },
  tabButton: {
    width: scale(120),
    height: scale(56),
    ...CS.centerAlign,
  },
  addButton: {
    width: scale(56),
    height: scale(56),
    ...CS.centerAlign,
    backgroundColor: Colors.flatBlue,
    borderRadius: scale(4),
    position: 'absolute',
    left: scale((360 - 56) / 2),
    top: verticalScale(-8),
  },
  swiperDotStyle: {
    display: 'none',
  },
  swiperPage: {
    flex: 1,
  }
});

export const TodoItemStyles = StyleSheet.create({
  container: {
    width: '100%',    
    position: 'relative',
  },
  item: {
    paddingHorizontal: scale(16),
    paddingBottom: verticalScale(8),
    // borderBottomWidth: 1,
    // borderColor: Colors.blueGrey,
  },  
  title: {
    flexDirection: 'row',
    ...CS.centerVerticalRow,    
  },
  titleText: {
    ...CS.font18Bold,
    marginLeft: scale(8),
  },
  titleDoneText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  content: {
    backgroundColor: Colors.lightBlueGrey,
    borderRadius: scale(8),
    padding: verticalScale(4),
  },
  contentText: {
    ...CS.font14,
    color: Colors.blueGrey,
  },
  bottomBorder: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.blueGrey,
    marginTop: verticalScale(8),
  },
});

export const BottomDialogStyles = StyleSheet.create({
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
    zIndex: 1,
    backgroundColor: Colors.black60,
  }, 
  bottom: {
    position: 'absolute',
    width: '100%',
    left: 0,
    bottom: 0,
  },
  label: {
    width: '100%',
    height: scale(48),
    borderTopLeftRadius: scale(8),
    borderTopRightRadius: scale(8),
    backgroundColor: Colors.white,
    ...CS.centerVertical,
    paddingLeft: scale(16),
  },
  labelText: {
    ...CS.font18Bold,
  },
  body: {
    width: '100%',
    backgroundColor: Colors.lightBlueGrey,
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(8),
  },
  titleText: {
    ...CS.font18Bold,   
    height: verticalScale(56), 
  },  
  contentText: {
    ...CS.font14,
    minHeight: verticalScale(48), 
    color: Colors.blueGrey,
    backgroundColor: Colors.lightWhite,
    borderRadius: scale(8),
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    height: verticalScale(56 + 32),
    backgroundColor: Colors.white,
    ...CS.centerVerticalRow,
    justifyContent: 'space-between',
    paddingHorizontal: scale(16),
  },
  button: {
    width: scale(360 - 32),
    height: scale(56),
    backgroundColor: Colors.twilightBlue,
    borderRadius: scale(8),
    ...CS.centerAlign,
  },
  buttonMini: {
    width: scale((360 - 32 - 16)/2),
    height: scale(56),
    backgroundColor: Colors.twilightBlue,
    borderRadius: scale(8),
    ...CS.centerAlign,
  },
  deleteButton: {
    backgroundColor: Colors.orangeyRed,
  },
  buttonText: {
    ...CS.font18,
    color: Colors.white,
  }
});
