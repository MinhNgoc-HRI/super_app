import {StyleSheet} from 'react-native';
import React, {forwardRef} from 'react';
import {BottomStackScreenProps} from '@src/navigation/types';
import {Box, Text} from 'pmn-rn-component';
export interface IMiniAppScreen extends BottomStackScreenProps<'MINI_APP'> {}
export type OMiniAppScreen = {};
const MiniAppScreen = forwardRef<OMiniAppScreen, IMiniAppScreen>(
  (props, _ref) => {
    const {} = props;
    return (
      <Box>
        <Text size={16}>index</Text>
      </Box>
    );
  },
);

export default MiniAppScreen;

const styles = StyleSheet.create({});
