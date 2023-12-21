import React, {forwardRef, memo} from 'react';
import {Box, Text, fontSizeLine, heightLize, widthLize} from 'pmn-rn-component';
import {ScrollView} from 'react-native-gesture-handler';
import IconTopUp from '@src/assets/svgs/TopUp';
import {useTheme} from '@src/providers/theme/Themes';
export type IServices = {};
export type OServices = {};
const Services = forwardRef<OServices, IServices>(() => {
  const theme = useTheme();
  return (
    <Box paddingLeft={widthLize(16)} paddingVertical={heightLize(16)}>
      <Box
        row
        alignItems="flex-end"
        justifyContent="space-between"
        paddingVertical={heightLize(20)}
        paddingRight={widthLize(16)}>
        <Text size={fontSizeLine(20)} weight="700" color={theme.colors.text}>
          Dịch vụ
        </Text>
        <Text
          size={fontSizeLine(14)}
          weight="500"
          color={theme.colors.primary}
          textDecorationLine="underline"
          onPress={() => {}}>
          Xem thêm
        </Text>
      </Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box middle center paddingRight={widthLize(32)}>
          <IconTopUp size={widthLize(48)} />
          <Text
            size={fontSizeLine(12)}
            color={theme.colors.text}
            paddingTop={heightLize(4)}>
            Nạp tiền
          </Text>
        </Box>
        <Box middle center paddingRight={widthLize(32)}>
          <IconTopUp size={widthLize(48)} />
          <Text
            size={fontSizeLine(12)}
            color={theme.colors.text}
            paddingTop={heightLize(4)}>
            Nạp tiền
          </Text>
        </Box>
        <Box middle center paddingRight={widthLize(32)}>
          <IconTopUp size={widthLize(48)} />
          <Text
            size={fontSizeLine(12)}
            color={theme.colors.text}
            paddingTop={heightLize(4)}>
            Nạp tiền
          </Text>
        </Box>
        <Box middle center paddingRight={widthLize(32)}>
          <IconTopUp size={widthLize(48)} />
          <Text
            size={fontSizeLine(12)}
            color={theme.colors.text}
            paddingTop={heightLize(4)}>
            Nạp tiền
          </Text>
        </Box>
        <Box middle center paddingRight={widthLize(32)}>
          <IconTopUp size={widthLize(48)} />
          <Text
            size={fontSizeLine(12)}
            color={theme.colors.text}
            paddingTop={heightLize(4)}>
            Nạp tiền
          </Text>
        </Box>
      </ScrollView>
    </Box>
  );
});

export default memo(Services);
