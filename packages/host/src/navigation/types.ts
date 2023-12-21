import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
export type MainStackParamList = {
  ON_BOARD: undefined;
  LOGIN: undefined;
  OTP: undefined;
  DRAWER_STACK: NavigatorScreenParams<DrawerStackParamList> | undefined;
  APP: undefined;
};
export type DrawerStackParamList = {
  BOTTOM_STACK: NavigatorScreenParams<BottomStackParamList> | undefined;
};
export type BottomStackParamList = {
  HOME: undefined;
  MINI_APP: undefined;
  PROFILE: undefined;
};
export type RoutesType = MainStackParamList;
export type MainStackScreenProp<T extends keyof MainStackParamList> =
  NativeStackScreenProps<MainStackParamList, T>;
export type DrawerStackScreenProps<T extends keyof DrawerStackParamList> =
  CompositeScreenProps<
    DrawerScreenProps<DrawerStackParamList, T>,
    MainStackScreenProp<keyof MainStackParamList>
  >;

export type BottomStackScreenProps<T extends keyof BottomStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomStackParamList, T>,
    CompositeScreenProps<
      DrawerStackScreenProps<keyof DrawerStackParamList>,
      MainStackScreenProp<keyof MainStackParamList>
    >
  >;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamList {}
  }
}
