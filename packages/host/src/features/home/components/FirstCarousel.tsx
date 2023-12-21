import {StyleSheet} from 'react-native';
import React, {forwardRef, memo, useCallback} from 'react';
import {Box, Thumb, heightLize, widthLize} from 'pmn-rn-component';
import Carousel from 'react-native-reanimated-carousel';
import {CarouselRenderItemInfo} from 'react-native-reanimated-carousel/lib/typescript/types';
import {DIMENSION} from '@src/common/dimensions';
const DATA: number[] = [0, 1, 2];
export type IFirstCarousel = {};
export type OFirstCarousel = {};
const FirstCarousel = forwardRef<OFirstCarousel, IFirstCarousel>(() => {
  const renderItem = useCallback((_info: CarouselRenderItemInfo<number>) => {
    return (
      <Box
        middle
        center
        margin={[widthLize(16), heightLize(16)]}
        overflow="hidden"
        radius={16}>
        <Thumb
          source={require('../../../assets/images/banner.png')}
          resizeMode="cover"
          style={styles.img}
        />
      </Box>
    );
  }, []);
  return (
    <Box>
      <Carousel
        loop
        autoPlay
        mode="parallax"
        vertical={false}
        data={DATA}
        width={widthLize(DIMENSION.width * 0.7)}
        renderItem={renderItem}
        style={styles.carousel}
      />
    </Box>
  );
});

export default memo(FirstCarousel);

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: heightLize(160),
  },
  carousel: {
    width: DIMENSION.width,
    height: heightLize(160),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
