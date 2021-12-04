import React, { FC } from 'react';
import * as Pages from '@todo/pages'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';


export default createAppContainer(createSwitchNavigator(
  {
    login: Pages.Login,
    todo: Pages.Todo,
  },
  {   
    initialRouteName: 'todo',
  }
));