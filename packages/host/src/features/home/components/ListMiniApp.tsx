import React, {forwardRef, useCallback} from 'react';
import {
  Box,
  Text,
  TouchRippleSingle,
  fontSizeLine,
  heightLize,
  widthLize,
} from 'pmn-rn-component';
import {useTheme} from '@src/providers/theme/Themes';
import GridFlatList from '@src/components/GridFlatList';
import {useNavigation} from '@react-navigation/native';
import {routerMain} from '@src/navigation/routers';

const DATA = ['Watchify', 'Spotify'];
export type IListMiniApp = {};
export type OListMiniApp = {};
const ListMiniApp = forwardRef<OListMiniApp, IListMiniApp>((_props, _ref) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const renderItem = useCallback(
    (item: string, _: number) => {
      return (
        <TouchRippleSingle onPress={() => navigation.navigate(routerMain.APP)}>
          <Box
            middle
            center
            radius={16}
            width={widthLize(80)}
            height={widthLize(80)}
            color={theme.colors.main_2_bg_hover}>
            <Text
              weight="700"
              textAlign="center"
              size={fontSizeLine(14)}
              color={theme.colors.text}>
              {item}
            </Text>
          </Box>
        </TouchRippleSingle>
      );
    },
    [navigation, theme.colors.main_2_bg_hover, theme.colors.text],
  );
  return (
    <Box paddingHorizontal={widthLize(16)}>
      <Box
        row
        alignItems="flex-end"
        justifyContent="space-between"
        paddingVertical={heightLize(20)}>
        <Text size={fontSizeLine(20)} weight="700" color={theme.colors.text}>
          Ứng dụng
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
      <GridFlatList data={DATA} renderItem={renderItem} />
    </Box>
  );
});

export default ListMiniApp;
