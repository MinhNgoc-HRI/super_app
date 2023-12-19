import React from 'react';
import 'react-native-gesture-handler';
import Navigator from '@src/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import defaultStyles from '@src/common/styles';
import {Text, TextInput} from 'react-native';
import {ColorSchemeProvider} from '@src/providers/theme/ColorSchemeContext';

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
    <GestureHandlerRootView style={defaultStyles.flex_1}>
      <ColorSchemeProvider>
        <Navigator />
      </ColorSchemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
