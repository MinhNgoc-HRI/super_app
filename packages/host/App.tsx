import React from 'react';
import 'react-native-gesture-handler';
import Navigator from '@src/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import defaultStyles from '@src/common/styles';
import {Platform, Text, TextInput} from 'react-native';
import {ColorSchemeProvider} from '@src/providers/theme/ColorSchemeContext';
import {ScriptManager, Federated, Script} from '@callstack/repack/client';
import ErrorBoundary from '@src/components/ErrorBoundary';

const resolveURL = Federated.createURLResolver({
  containers: {
    watchify: 'http://localhost:9000/[name][ext]',
  },
});
ScriptManager.shared.addResolver(async (scriptId, caller) => {
  let url;
  if (caller === 'main') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  if (!url) {
    return undefined;
  }
  return {
    url,
    cache: false, // For development
    query: {
      platform: Platform.OS, // For development
    },
  };
});
/*
lắng nghe khi quá trình tải script hoàn hành
*/
ScriptManager.shared.on('resolved', ({scriptId, caller}) => {
  console.log(`resolved ${scriptId} ${caller}`);
  // do something
});
interface TextWithDefaultProps extends Text {
  defaultProps?: {allowFontScaling?: boolean};
}
interface TextInputWithDefaultProps extends TextInput {
  defaultProps?: {allowFontScaling?: boolean};
}

(Text as unknown as TextWithDefaultProps).defaultProps =
  (Text as unknown as TextWithDefaultProps).defaultProps || {};
(Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling =
  false;
(TextInput as unknown as TextInputWithDefaultProps).defaultProps =
  (TextInput as unknown as TextInputWithDefaultProps).defaultProps || {};
(
  TextInput as unknown as TextInputWithDefaultProps
).defaultProps!.allowFontScaling = false;
const App = () => {
  return (
    <ErrorBoundary name="host">
      <GestureHandlerRootView style={defaultStyles.flex_1}>
        <ColorSchemeProvider>
          <Navigator />
        </ColorSchemeProvider>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
};

export default App;
