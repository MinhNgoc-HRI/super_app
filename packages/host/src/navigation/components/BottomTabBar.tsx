import {StyleSheet} from 'react-native';
import React, {forwardRef, memo, useCallback, useImperativeHandle} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {
  Box,
  fontSizeLine,
  heightLize,
  Text,
  TouchRippleSingle,
} from 'pmn-rn-component';
import {useTheme} from '@src/providers/theme/Themes';
import {routerBottom} from '../routers';
import IconHome from '@src/assets/svgs/Home';
import IconFile from '@src/assets/svgs/File';
import IconUserRound from '@src/assets/svgs/UserRound';
import {BottomStackParamList} from '@src/navigation/types';
import {NavigationState} from '@react-navigation/native';
export interface IBottomTabBar extends BottomTabBarProps {}
export type OBottomTabBar = {};
const BottomTabBar = forwardRef<OBottomTabBar, IBottomTabBar>((props, ref) => {
  const {insets, navigation, state} = props;
  const {routes} = state;
  console.log({state, navigation});
  const theme = useTheme();
  useImperativeHandle(ref, () => ({}), []);
  const renderItem = useCallback(
    (name: string, isActive?: boolean) => {
      const color = isActive ? theme.colors.primary : theme.colors.text;
      switch (name) {
        case routerBottom.HOME:
          return (
            <Box middle center>
              <IconHome color={color} />
              <Text
                marginTop={heightLize(6)}
                size={fontSizeLine(10)}
                weight={'700'}
                color={color}>
                Trang chủ
              </Text>
            </Box>
          );
        case routerBottom.MINI_APP:
          return (
            <Box middle center>
              <IconFile color={color} />
              <Text
                marginTop={heightLize(6)}
                size={fontSizeLine(10)}
                weight={'700'}
                color={color}>
                Ứng dụng
              </Text>
            </Box>
          );
        case routerBottom.PROFILE:
          return (
            <Box middle center>
              <IconUserRound color={color} />
              <Text
                marginTop={heightLize(6)}
                size={fontSizeLine(10)}
                weight={'700'}
                color={color}>
                Tài khoản
              </Text>
            </Box>
          );
        default:
          return <Box />;
      }
    },
    [theme.colors.primary, theme.colors.text],
  );
  const onPress = useCallback(
    (
      route: NavigationState<BottomStackParamList>['routes'][number],
      isFocused: boolean,
    ) => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });
      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    },
    [navigation],
  );
  return (
    <Box
      row
      color={theme.colors.main_bg}
      paddingBottom={insets.bottom}
      center
      justifyContent={'space-around'}>
      {routes.map((value, index) => {
        return (
          <TouchRippleSingle
            touchProps={{style: styles.hidden}}
            key={value.key}
            onPress={() => onPress(value as any, state.index === index)}>
            {renderItem(value.name, state.index === index)}
          </TouchRippleSingle>
        );
      })}
    </Box>
  );
});

export default memo(BottomTabBar);

const styles = StyleSheet.create({
  hidden: {overflow: 'hidden', borderRadius: 100, padding: 10},
});
