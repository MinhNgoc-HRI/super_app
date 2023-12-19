import React, {ReactElement, forwardRef, memo} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {useColorScheme} from './ColorSchemeContext';
export type IColorSchemePressable = {
  children: ReactElement;
  onPress?: () => void;
};
export type OColorSchemePressable = {};
export const ColorSchemePressable = memo(
  forwardRef<OColorSchemePressable, IColorSchemePressable>((props, _ref) => {
    const {children, onPress = () => {}} = props;
    const {toggle, active} = useColorScheme();
    const tap = Gesture.Tap()
      .runOnJS(true)
      .onStart(e => {
        if (!active) {
          onPress();
          setTimeout(() => {
            toggle(e.absoluteX, e.absoluteY);
          }, 500);
        }
      });
    return <GestureDetector gesture={tap}>{children}</GestureDetector>;
  }),
);
