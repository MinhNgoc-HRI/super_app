import React, {forwardRef, memo, useCallback, useRef} from 'react';
import {DrawerStackParamList, MainStackScreenProp} from './types';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {routerDrawer} from './routers';
import {useTheme} from '@src/providers/theme/Themes';
import BottomStack from './BottomStack';
import {
  Box,
  fontSizeLine,
  getOffset,
  heightLize,
  Text,
  TouchRippleSingle,
  widthLize,
} from 'pmn-rn-component';
import {ImageBackground, StyleSheet} from 'react-native';
import {ColorSchemePressable} from '@src/providers/theme/ColorSchemePressable';
import DarkLight from '@src/assets/svgs/DarkLight';
import IconUserSquare from '@src/assets/svgs/UserSquare';

const Drawer = createDrawerNavigator<DrawerStackParamList>();
export interface IDrawerStack extends MainStackScreenProp<'DRAWER_STACK'> {}
export type ODrawerStack = {};
const DrawerStack = forwardRef<ODrawerStack, IDrawerStack>((_props, _ref) => {
  const theme = useTheme();
  const refSvg = useRef<any | null>(null);

  const DrawerContent = useCallback(
    (props: DrawerContentComponentProps) => {
      return (
        <Box
          flex={1}
          overflow={'hidden'}
          style={[
            styles.drawerContent,
            {borderColor: theme.colors.secondaryBackground},
          ]}>
          <ImageBackground
            source={require('../assets/images/banner.png')}
            resizeMode={'cover'}>
            <Box
              height={heightLize(200)}
              width={'100%'}
              paddingTop={getOffset().top_without_margin}>
              <Box padding={10}>
                <Box row justifyContent={'space-between'} center>
                  <IconUserSquare size={widthLize(30)} />
                  <ColorSchemePressable
                    onPress={() => refSvg?.current?.onChange()}>
                    <DarkLight ref={refSvg} />
                  </ColorSchemePressable>
                </Box>
                <Box height={20} />
                <Box row>
                  <TouchRippleSingle
                    touchProps={{
                      style: {
                        borderRadius: 16,
                        overflow: 'hidden',
                        paddingVertical: 8,
                        paddingHorizontal: 16,
                        backgroundColor: '#F5F5F5',
                      },
                    }}>
                    <Text
                      textAlign={'center'}
                      size={fontSizeLine(16)}
                      weight={'bold'}
                      color={'#040303'}>
                      Đăng nhập
                    </Text>
                  </TouchRippleSingle>
                  <Box width={10} />
                  <TouchRippleSingle
                    touchProps={{
                      style: {
                        borderRadius: 16,
                        overflow: 'hidden',
                        paddingVertical: 8,
                        paddingHorizontal: 16,
                        backgroundColor: '#040303',
                      },
                    }}>
                    <Text
                      textAlign={'center'}
                      size={fontSizeLine(16)}
                      weight={'bold'}
                      color={'#F5F5F5'}>
                      Đăng ký
                    </Text>
                  </TouchRippleSingle>
                </Box>
              </Box>
            </Box>
          </ImageBackground>
          <DrawerContentScrollView {...props}>
            <Box height={50} />
          </DrawerContentScrollView>
        </Box>
      );
    },
    [theme.colors.secondaryBackground],
  );
  return (
    <Drawer.Navigator
      initialRouteName={routerDrawer.BOTTOM_STACK}
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        drawerActiveBackgroundColor: theme.colors.mainBackground,
        drawerActiveTintColor: 'transparent',
        drawerInactiveTintColor: 'transparent',
        drawerType: 'slide',
        overlayColor: 'transparent',
        drawerStyle: {
          flex: 1,
          width: '70%',
          backgroundColor: theme.colors.mainBackground,
        },
        sceneContainerStyle: {
          backgroundColor: theme.colors.mainBackground,
        },
      }}
      drawerContent={DrawerContent}>
      <Drawer.Screen name={routerDrawer.BOTTOM_STACK} component={BottomStack} />
    </Drawer.Navigator>
  );
});

export default memo(DrawerStack);
const styles = StyleSheet.create({
  drawerContent: {
    borderWidth: 1,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  lottie: {
    width: widthLize(120),
    height: heightLize(40),
  },
  banner: {
    height: heightLize(200),
    width: '100%',
  },
});
