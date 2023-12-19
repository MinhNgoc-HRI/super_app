import {Dimensions, Platform} from 'react-native';

export const DIMENSION = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  isIos: Platform.OS === 'ios',
};
