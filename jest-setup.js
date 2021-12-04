import { NativeModules } from 'react-native';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

NativeModules.ReactLocalization = {
    language: 'ko',
};

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);