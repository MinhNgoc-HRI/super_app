import React from 'react';
import {Box, Text, fontSizeLine} from 'pmn-rn-component';
import {Federated} from '@callstack/repack/client';

import ErrorBoundary from '@src/components/ErrorBoundary';
import {MainStackScreenProp} from '@src/navigation/types';
const Watchify = React.lazy(() => Federated.importModule('watchify', './App'));

interface IAppScreen extends MainStackScreenProp<'APP'> {}
type OAppScreen = {};
const AppScreen = React.forwardRef<OAppScreen, IAppScreen>((_props, ref) => {
  React.useImperativeHandle(ref, () => ({}));

  return (
    <Box flex={1}>
      <ErrorBoundary name="watchify">
        <React.Suspense
          fallback={
            <Box flex={1} middle center>
              <Text size={fontSizeLine(16)}>Loading...</Text>
            </Box>
          }>
          <Watchify />
        </React.Suspense>
      </ErrorBoundary>
    </Box>
  );
});

export default React.memo(AppScreen);
