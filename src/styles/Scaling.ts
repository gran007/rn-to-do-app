import { Dimensions } from 'react-native';
// import { getStatusBarHeight } from 'react-native-status-bar-height';
const { width, height } = Dimensions.get('window');
const guidelineBaseWidth: number = 360;
const guidelineBaseHeight: number = 640;

// export const statusBarHeight: number = getStatusBarHeight();
export const scale = (size: number): number => width / guidelineBaseWidth * size;
export const verticalScale = (size: number): number => height / guidelineBaseHeight * size;
