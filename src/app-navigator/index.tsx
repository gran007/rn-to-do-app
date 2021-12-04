import React, { FC, memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Pages from '@todo/pages'
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenProps } from '@todo/interfaces'

const { Screen, Navigator } = createStackNavigator();
const NoHeaderScreen: FC<ScreenProps> = (props: ScreenProps) => {
  const { name, component } = props;
  return (<Screen options={{ headerShown: false }} name={name} component={component} />)
}

const AppNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='login'>
      <Screen options={{ headerShown: false }} name={'login'} component={Pages.Login} />
      <Screen options={{ headerShown: false }} name={'todo'} component={Pages.Todo} />
        {/* <NoHeaderScreen name={'login'} component={Pages.Login} />
        <NoHeaderScreen name={'todo'} component={Pages.Todo} /> */}
      </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;