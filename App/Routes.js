/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Screens/Login/Login'


const Routes = createStackNavigator({
    Login: {screen: Login, navigationOptions:{header: null}},
  });
  
export default createAppContainer(Routes);