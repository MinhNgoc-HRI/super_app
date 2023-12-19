import React, {memo, useRef} from 'react';
import MainStack from './MainStack';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {refNavigation} from '@src/navigation/navigationHelper';
import {RoutesType} from '@src/navigation/types';
import {useColorScheme} from '@src/providers/theme/ColorSchemeContext';
import {ThemeProvider} from '@shopify/restyle';
import {darkTheme, theme} from '@src/providers/theme/Themes';
// import analytics from '@react-native-firebase/analytics';
const Navigator: React.FC<any> = () => {
  const routeNameRef = useRef<string | null>(null);
  const navigationRef = useRef<NavigationContainerRef<RoutesType> | null>(null);
  const {colorScheme} = useColorScheme();
  return (
    <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : theme}>
      <NavigationContainer
        ref={ref => {
          refNavigation.current = ref;
          navigationRef.current = ref;
        }}
        onReady={() => {
          const routerName = navigationRef?.current?.getCurrentRoute?.()?.name;
          if (routerName) {
            routeNameRef.current = routerName || null;
          }
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName =
            navigationRef?.current?.getCurrentRoute?.()?.name || null;

          if (previousRouteName !== currentRouteName && currentRouteName) {
            console.log({currentRouteName});
            // await analytics().logScreenView({
            //   screen_name: currentRouteName,
            //   screen_class: currentRouteName,
            // });
          }
          routeNameRef.current = currentRouteName;
        }}>
        <MainStack />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default memo(Navigator);
