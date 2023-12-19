import React, {forwardRef, memo} from 'react';
import {BottomStackScreenProps} from '@src/navigation/types';
import {Box, Text} from 'pmn-rn-component';
import {useTheme} from '@src/providers/theme/Themes';
import DarkLight from '@src/assets/svgs/DarkLight';
export interface IHomeScreen extends BottomStackScreenProps<'HOME'> {}
export type OHomeScreen = {};
const HomeScreen = forwardRef<OHomeScreen, IHomeScreen>((props, _ref) => {
  const theme = useTheme();

  return (
    <Box
      flex={1}
      color={theme.colors.mainBackground}
      paddingTop={60}
      overflow="hidden">
      <DarkLight />
      <Text size={16} onPress={() => props.navigation.openDrawer()}>
        Open
      </Text>
    </Box>
  );
});

export default memo(HomeScreen);
