import React, {forwardRef, memo, useCallback} from 'react';
import {BottomStackParamList, DrawerStackScreenProps} from './types';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {routerBottom} from './routers';
import HomeScreen from '@src/features/home';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {Box} from 'pmn-rn-component';
import {useDrawerProgress} from '@react-navigation/drawer';
import {useTheme} from '@src/providers/theme/Themes';
import BottomTabBar from './components/BottomTabBar';
import MiniAppScreen from '@src/features/mini_app';
import ProfileScreen from '@src/features/profile';

const Stack = createBottomTabNavigator<BottomStackParamList>();
const BoxAnimted = Animated.createAnimatedComponent(Box);
export interface IBottomStack extends DrawerStackScreenProps<'BOTTOM_STACK'> {}
export type OBottomStack = {};
const BottomStack = forwardRef<OBottomStack, IBottomStack>((_props, _ref) => {
  const drawerProgress = useDrawerProgress();
  const theme = useTheme();

  const rootStyled = useAnimatedStyle(() => {
    const scale = interpolate(
      drawerProgress.value,
      [0, 0.5, 1],
      [1, 0.9, 0.8],
      Extrapolation.CLAMP,
    );
    const borderWidth = interpolate(
      drawerProgress.value,
      [0, 0.5, 1],
      [0, 0.5, 1],
      Extrapolation.CLAMP,
    );
    return {
      borderWidth,
      transform: [{scale: scale}],
    };
  }, []);
  const TabBar = useCallback(
    (p: BottomTabBarProps) => <BottomTabBar {...p} />,
    [],
  );
  return (
    <BoxAnimted
      style={rootStyled}
      flex={1}
      borderColor={theme.colors.secondaryBackground}>
      <Stack.Navigator
        initialRouteName={routerBottom.HOME}
        tabBar={TabBar}
        detachInactiveScreens
        screenOptions={{
          lazy: true,
          headerShown: false,
        }}>
        <Stack.Screen name={routerBottom.HOME} component={HomeScreen} />
        <Stack.Screen name={routerBottom.MINI_APP} component={MiniAppScreen} />
        <Stack.Screen name={routerBottom.PROFILE} component={ProfileScreen} />
      </Stack.Navigator>
    </BoxAnimted>
  );
});

export default memo(BottomStack);
