import React, {forwardRef, memo} from 'react';
import {MainStackScreenProp} from '@src/navigation/types';
import {Box, Text} from 'pmn-rn-component';
export interface OLoginScreen extends MainStackScreenProp<'LOGIN'> {}
export type ILoginScreen = {};
const LoginScreen = forwardRef<OLoginScreen, ILoginScreen>((_props, _ref) => {
  return (
    <Box flex={1}>
      <Text size={16}>index</Text>
    </Box>
  );
});

export default memo(LoginScreen);
