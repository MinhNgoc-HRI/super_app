import {StyleSheet} from 'react-native';
import React, {forwardRef, memo, useCallback} from 'react';
import {
  Box,
  Thumb,
  TouchRippleSingle,
  heightLize,
  widthLize,
} from 'pmn-rn-component';
import {useTheme} from '@src/providers/theme/Themes';
import IconSort from '@src/assets/svgs/Sort';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import IconNoti from '@src/assets/svgs/Noti';
import IconSearch from '@src/assets/svgs/Search';

export type IHeader = {};
export type OHeader = {};
const Header = forwardRef<OHeader, IHeader>((_props, _ref) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const openMenu = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  }, [navigation]);
  return (
    <Box
      row
      padding={[widthLize(16), heightLize(16)]}
      alignItems="flex-end"
      borderBottomWidth={1}
      borderBottomColor={theme.colors.main_2_bg}>
      <Box flex={1} row justifyContent="flex-start">
        <TouchRippleSingle
          onPress={openMenu}
          touchProps={{
            style: [
              styles.btn_menu,
              {borderColor: theme.colors.main_2_bg_hover},
            ],
          }}>
          <IconSort color={theme.colors.text} size={widthLize(24)} />
        </TouchRippleSingle>
        <Box width={widthLize(16)} />
        <TouchRippleSingle>
          <IconSearch color={theme.colors.text} size={widthLize(24)} />
        </TouchRippleSingle>
        <Box width={widthLize(16)} />
        <TouchRippleSingle>
          <IconNoti color={theme.colors.text} size={widthLize(24)} />
        </TouchRippleSingle>
      </Box>
      <Thumb
        source={require('../../../assets/images/logo_text.png')}
        resizeMode="contain"
        style={styles.logo}
      />
    </Box>
  );
});

export default memo(Header);

const styles = StyleSheet.create({
  logo: {
    width: widthLize(120),
    height: heightLize(40),
  },
  btn_menu: {
    borderWidth: 1,
  },
});
