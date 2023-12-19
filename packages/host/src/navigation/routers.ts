import {
  BottomStackParamList,
  DrawerStackParamList,
  MainStackParamList,
} from './types';

type Entries<T> = {
  [K in keyof T]: K;
};

export const routerMain: Entries<MainStackParamList> = {
  ON_BOARD: 'ON_BOARD',
  LOGIN: 'LOGIN',
  OTP: 'OTP',
  DRAWER_STACK: 'DRAWER_STACK',
};

export const routerDrawer: Entries<DrawerStackParamList> = {
  BOTTOM_STACK: 'BOTTOM_STACK',
};

export const routerBottom: Entries<BottomStackParamList> = {
  HOME: 'HOME',
  MINI_APP: 'MINI_APP',
  PROFILE: 'PROFILE',
};
