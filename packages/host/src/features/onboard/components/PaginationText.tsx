import React, {forwardRef, memo, useCallback} from 'react';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  Box,
  Text,
  TouchRippleSingle,
  TouchSingle,
  fontSizeLine,
  heightLize,
  widthLize,
} from 'pmn-rn-component';
import {useTheme} from '@src/providers/theme/Themes';
import ArrowRight from '@src/assets/svgs/ArrowRight';
const BoxAnimated = Animated.createAnimatedComponent(Box);
export type IPaginationText = {
  index: number;
  length: number;
  animValue: SharedValue<number>;
  title?: string;
  onPress?: () => void;
};
export type OPaginationText = {};
const PaginationText = forwardRef<OPaginationText, IPaginationText>(
  (props, _ref) => {
    const {
      index,
      length,
      animValue,
      title = 'asdasdasd',
      onPress = () => {},
    } = props;
    const theme = useTheme();
    const rootStyled = useAnimatedStyle(() => {
      let inputRange = [index - 1, index, index + 1];

      if (index === 0 && animValue?.value > length - 1) {
        inputRange = [length - 1, length, length + 1];
      }
      const opacity = interpolate(animValue.value, inputRange, [0, 1, 0]);
      const transform = interpolate(animValue.value, inputRange, [40, 0, 40]);
      return {
        opacity,
        transform: [{translateY: transform}],
        zIndex: opacity,
      };
    }, []);
    const Button = useCallback(() => {
      if (index !== length - 1) {
        return (
          <Box middle center>
            <TouchSingle onPress={onPress}>
              <Box
                middle
                center
                width={widthLize(48)}
                height={widthLize(48)}
                radius={100}
                color={theme.colors.secondary}>
                <ArrowRight color={theme.colors.primary} />
              </Box>
            </TouchSingle>
          </Box>
        );
      }
      return (
        <Box middle center>
          <TouchRippleSingle onPress={onPress}>
            <Box
              color={theme.colors.mainForeground}
              padding={[widthLize(50), heightLize(12)]}
              radius={48}>
              <Text
                size={fontSizeLine(16)}
                weight="700"
                color={theme.colors.mainBackground}>
                Bắt đầu
              </Text>
            </Box>
          </TouchRippleSingle>
        </Box>
      );
    }, [
      index,
      length,
      onPress,
      theme.colors.mainBackground,
      theme.colors.mainForeground,
      theme.colors.primary,
      theme.colors.secondary,
    ]);
    return (
      <BoxAnimated position="absolute" style={rootStyled} left={0} right={0}>
        <Text
          size={fontSizeLine(20)}
          weight="bold"
          textAlign="center"
          color={theme.colors.mainForeground}>
          {title}
        </Text>
        <Box height={heightLize(30)} />
        <Button />
      </BoxAnimated>
    );
  },
);

export default memo(PaginationText);
