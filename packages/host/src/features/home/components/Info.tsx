import IconExpandRight from '@src/assets/svgs/ExpandRight';
import {useTheme} from '@src/providers/theme/Themes';
import {
  Box,
  Text,
  TouchRippleSingle,
  fontSizeLine,
  heightLize,
  widthLize,
} from 'pmn-rn-component';
import React, {forwardRef, memo} from 'react';
import {formatCurrency} from '@src/common/format';
import {StyleSheet} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
export type IInfo = {};
export type OInfo = {};
const Info = forwardRef<OInfo, IInfo>((_props, _ref) => {
  const theme = useTheme();
  return (
    <Box
      color={theme.colors.main_2_bg}
      radius={16}
      margin={[widthLize(16), heightLize(16)]}>
      <Box
        paddingLeft={widthLize(16)}
        paddingVertical={heightLize(20)}
        row
        justifyContent="space-between">
        <Box row center>
          <Box alignItems="flex-start">
            <Text
              size={fontSizeLine(12)}
              weight="600"
              color={theme.colors.sub_text}>
              tài khoản chính
            </Text>
            <Text
              size={fontSizeLine(16)}
              weight="bold"
              color={theme.colors.text}>
              {formatCurrency(19056000)}
            </Text>
          </Box>
          <IconExpandRight color={theme.colors.text} />
        </Box>
        <TouchRippleSingle
          touchProps={{
            style: [styles.topup_btn, {backgroundColor: theme.colors.main_bg}],
          }}>
          <Box
            radius={16}
            color={theme.colors.primary}
            position="absolute"
            top="-50%"
            right={0}
            padding={[widthLize(3), heightLize(3)]}>
            <Text size={fontSizeLine(10)} color={theme.colors.text}>
              -50%
            </Text>
          </Box>
          <Text size={fontSizeLine(12)} weight="700" color={theme.colors.text}>
            Nạp thẻ
          </Text>
        </TouchRippleSingle>
      </Box>
      <Box
        paddingHorizontal={widthLize(16)}
        paddingVertical={heightLize(20)}
        row>
        <Box middle center marginHorizontal={widthLize(16)}>
          <CircularProgress
            value={232}
            radius={40}
            valueSuffix=" MB"
            inActiveStrokeColor={theme.colors.main_2_bg_hover}
            activeStrokeColor={theme.colors.primary}
            progressValueStyle={{fontSize: fontSizeLine(12)}}
          />
          <Text
            marginTop={heightLize(10)}
            size={fontSizeLine(12)}
            weight="700"
            color={theme.colors.text}>
            Dữ liệu
          </Text>
        </Box>
        <Box middle center marginHorizontal={widthLize(16)}>
          <CircularProgress
            radius={40}
            value={60}
            initialValue={100}
            valueSuffix=" Minute"
            inActiveStrokeColor={theme.colors.main_2_bg_hover}
            activeStrokeColor={theme.colors.primary}
            progressValueStyle={{fontSize: fontSizeLine(12)}}
          />
          <Text
            marginTop={heightLize(10)}
            size={fontSizeLine(12)}
            weight="700"
            color={theme.colors.text}>
            Phút gọi
          </Text>
        </Box>
        <Box middle center marginHorizontal={widthLize(16)}>
          <CircularProgress
            radius={40}
            value={10}
            initialValue={4}
            maxValue={60}
            valueSuffix=" Day"
            inActiveStrokeColor={theme.colors.main_2_bg_hover}
            activeStrokeColor={theme.colors.primary}
            progressValueStyle={{fontSize: fontSizeLine(12)}}
          />
          <Text
            marginTop={heightLize(10)}
            size={fontSizeLine(12)}
            weight="700"
            color={theme.colors.text}>
            Hạn dùng
          </Text>
        </Box>
      </Box>
    </Box>
  );
});

export default memo(Info);
const styles = StyleSheet.create({
  topup_btn: {
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    paddingHorizontal: widthLize(20),
    paddingVertical: heightLize(8),
  },
});
