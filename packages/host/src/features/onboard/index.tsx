import React, {forwardRef, memo, useCallback, useRef} from 'react';
import {
  Box,
  Thumb,
  heightLize,
  Text,
  fontSizeLine,
  getOffset,
} from 'pmn-rn-component';
import {MainStackScreenProp} from '@src/navigation/types';
import {useTheme} from '@src/providers/theme/Themes';
import Carousel from 'react-native-reanimated-carousel';
import {
  CarouselRenderItemInfo,
  ICarouselInstance,
} from 'react-native-reanimated-carousel/lib/typescript/types';
import {DIMENSION} from '@src/common/dimensions';
import {StyleSheet} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {PaginationItem} from './components/PaginationItem';
import PaginationText from './components/PaginationText';
import {routerMain} from '@src/navigation/routers';
const DATA = [
  'host_onboard_1.png',
  'host_onboard_2.png',
  'host_onboard_3.png',
  'host_onboard_4.png',
];
const DATA_CONTENT = [
  'Manage & Update Your Account Information Quickly',
  'Integrated Self-care & Money Service For Better User Experience',
  'Quick Action On Your Finger Tips',
  'Data Network For Everyone',
];
export interface IOnBoardScreen extends MainStackScreenProp<'ON_BOARD'> {}
export type OOnBoardScreen = {};
const OnBoardScreen = forwardRef<OOnBoardScreen, IOnBoardScreen>(
  (props, _ref) => {
    const {navigation} = props;
    const theme = useTheme();
    const refCarousel = useRef<ICarouselInstance>(null);
    const progressValue = useSharedValue(0);

    const renderItem = useCallback((info: CarouselRenderItemInfo<string>) => {
      return (
        <Thumb
          source={require(`../../assets/images/${info.item}`)}
          resizeMode="cover"
          style={styles.img}
        />
      );
    }, []);

    return (
      <Box flex={1} color={theme.colors.mainBackground}>
        <Box
          position="absolute"
          top={getOffset().top + 16}
          right={16}
          zIndex={1}>
          <Text
            onPress={() => navigation.navigate(routerMain.DRAWER_STACK)}
            size={fontSizeLine(16)}
            weight="700"
            color={theme.colors.primary}>
            Skip
          </Text>
        </Box>
        <Box flex={1} middle>
          <Carousel
            ref={refCarousel}
            data={DATA}
            renderItem={renderItem}
            width={DIMENSION.width}
            height={DIMENSION.width}
            style={styles.carousel}
            onProgressChange={(_offset, absolute) => {
              progressValue.value = absolute;
            }}
          />
          <Box row middle center marginTop={heightLize(24)}>
            {DATA.map((_page, index) => (
              <PaginationItem
                backgroundColor={theme.colors.primary}
                inActiveBg={theme.colors.secondaryBackground}
                animValue={progressValue}
                index={index}
                key={index}
                length={DATA.length}
              />
            ))}
          </Box>
          <Box marginTop={heightLize(50)}>
            {DATA_CONTENT.map((page, index) => (
              <PaginationText
                animValue={progressValue}
                index={index}
                key={index}
                title={page}
                length={DATA_CONTENT.length}
                onPress={() => {
                  if (index !== DATA_CONTENT.length - 1) {
                    refCarousel.current?.next({count: 1});
                  } else {
                    navigation.navigate(routerMain.DRAWER_STACK);
                  }
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    );
  },
);

export default memo(OnBoardScreen);
const styles = StyleSheet.create({
  carousel: {
    width: DIMENSION.width,
    height: DIMENSION.width,
  },
  img: {
    width: DIMENSION.width,
    height: DIMENSION.width,
  },
});
