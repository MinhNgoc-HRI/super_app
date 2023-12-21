import React, {forwardRef} from 'react';
import {BottomStackScreenProps} from '@src/navigation/types';
import {Box, Text, fontSizeLine} from 'pmn-rn-component';
import {useTheme} from '@src/providers/theme/Themes';
export interface IMiniAppScreen extends BottomStackScreenProps<'MINI_APP'> {}
export type OMiniAppScreen = {};
const MiniAppScreen = forwardRef<OMiniAppScreen, IMiniAppScreen>(
  (props, _ref) => {
    const {} = props;
    const theme = useTheme();
    return (
      <Box flex={1} color={theme.colors.main_bg} middle center>
        <Text size={fontSizeLine(16)} color={theme.colors.text}>
          Tính năng đang được phát triền
        </Text>
      </Box>
    );
  },
);

export default MiniAppScreen;
