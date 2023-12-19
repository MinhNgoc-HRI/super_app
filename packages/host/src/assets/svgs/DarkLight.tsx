import React, {forwardRef, memo, useImperativeHandle} from 'react';
import Svg, {Mask, Circle, G, Rect, Line} from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useTheme} from '@src/providers/theme/Themes';
const CircleAnimted = Animated.createAnimatedComponent(Circle);
const GAnimted = Animated.createAnimatedComponent(G);
const SvgAnimted = Animated.createAnimatedComponent(Svg);
export type IDarkLight = {
  size?: number;
  useColorDarkMode?: boolean;
};
export type ODarkLight = {};
const DarkLight = forwardRef<ODarkLight, IDarkLight>((props, ref) => {
  const {size = 40, useColorDarkMode} = props;
  const theme = useTheme();
  const isDarkMode = useSharedValue<boolean>(false);

  const maskedCircleProps = useAnimatedProps(() => {
    return {
      cx: isDarkMode.value ? withSpring(12) : withSpring(30),
      cy: isDarkMode.value ? withSpring(4) : withSpring(0),
    };
  }, []);
  const centerCircleProps = useAnimatedProps(
    () => ({
      r: isDarkMode.value ? withSpring(9) : withSpring(5),
    }),
    [],
  );
  const linesProps = useAnimatedProps(
    () => ({
      opacity: isDarkMode.value ? withSpring(0) : withSpring(1),
    }),
    [],
  );
  const rootStyled = useAnimatedProps(() => {
    return {
      transform: [
        {
          rotate: isDarkMode.value ? '40deg' : '90deg',
        },
      ],
    };
  }, []);
  useImperativeHandle(
    ref,
    () => ({
      onChange: () => (isDarkMode.value = !isDarkMode.value),
    }),
    [isDarkMode],
  );
  return (
    <SvgAnimted
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={useColorDarkMode ? theme.colors.mainForeground : '#FFF'}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      animatedProps={rootStyled}>
      <Mask id="mask">
        <Rect x="0" y="0" width="100%" height="100%" fill="white" />
        <CircleAnimted animatedProps={maskedCircleProps} r="9" fill="black" />
      </Mask>
      <CircleAnimted
        fill={useColorDarkMode ? theme.colors.mainForeground : '#FFF'}
        cx="12"
        cy="12"
        animatedProps={centerCircleProps}
        mask="url(#mask)"
      />

      <GAnimted animatedProps={linesProps} fill={useColorDarkMode ? theme.colors.mainForeground : '#FFF'}>
        <Line x1="12" y1="1" x2="12" y2="3" />
        <Line x1="12" y1="21" x2="12" y2="23" />
        <Line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <Line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <Line x1="1" y1="12" x2="3" y2="12" />
        <Line x1="21" y1="12" x2="23" y2="12" />
        <Line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <Line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </GAnimted>
    </SvgAnimted>
  );
});

export default memo(DarkLight);
