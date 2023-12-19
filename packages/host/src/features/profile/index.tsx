import React from 'react';
import {BottomStackScreenProps} from '@src/navigation/types';
import {forwardRef, memo} from 'react';
import {Box, Text} from 'pmn-rn-component';
import {useTheme} from '@src/providers/theme/Themes';
export interface IProfileScreen extends BottomStackScreenProps<'PROFILE'> {}
export type OProfileScreen = {};

const ProfileScreen = forwardRef<OProfileScreen, IProfileScreen>(
  (props, _ref) => {
    const {} = props;
    const theme = useTheme();
    return (
      <Box flex={1} color={theme.colors.mainBackground}>
        <Text size={16} color={theme.colors.mainBackground}>
          Profile
        </Text>
      </Box>
    );
  },
);
export default memo(ProfileScreen);
