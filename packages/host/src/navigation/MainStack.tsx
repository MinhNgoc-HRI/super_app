import React, {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routerMain} from './routers';
import OnboardScreen from '@src/features/onboard';
import LoginScreen from '@src/features/login';
import {MainStackParamList} from './types';
import DrawerStack from './DrawerStack';
import AppScreen from '@src/features/app';
const Stack = createNativeStackNavigator<MainStackParamList>();
const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routerMain.ON_BOARD}
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: 'transperant',
        },
        gestureEnabled: false,
      }}>
      <Stack.Screen name={routerMain.ON_BOARD} component={OnboardScreen} />
      <Stack.Screen name={routerMain.LOGIN} component={LoginScreen} />
      <Stack.Screen name={routerMain.DRAWER_STACK} component={DrawerStack} />
      <Stack.Screen name={routerMain.APP} component={AppScreen} />
    </Stack.Navigator>
  );
};

export default memo(MainStack);
