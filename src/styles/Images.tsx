import React from 'react';
import { Image } from 'react-native';
import { scale } from './Scaling';

export const Images = {
  logo: <Image source={require('../images/logo.png')}
    style={{ width: scale(74), height: scale(74) }}
  />
}