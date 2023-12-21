import React, {forwardRef, memo} from 'react';
import {BottomStackScreenProps} from '@src/navigation/types';
import {Box, getOffset} from 'pmn-rn-component';
import {useTheme} from '@src/providers/theme/Themes';
import Header from './components/Header';
import FirstCarousel from './components/FirstCarousel';
import ListMiniApp from './components/ListMiniApp';
import Services from './components/Services';
import Info from './components/Info';
import {ScrollView} from 'react-native-gesture-handler';
export interface IHomeScreen extends BottomStackScreenProps<'HOME'> {}
export type OHomeScreen = {};
const HomeScreen = forwardRef<OHomeScreen, IHomeScreen>((_props, _ref) => {
  const theme = useTheme();
  return (
    <Box
      flex={1}
      color={theme.colors.main_bg}
      paddingTop={getOffset().top_without_margin}
      overflow="hidden">
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FirstCarousel />
        <ListMiniApp />
        <Services />
        <Info />
      </ScrollView>
    </Box>
  );
});

export default memo(HomeScreen);
