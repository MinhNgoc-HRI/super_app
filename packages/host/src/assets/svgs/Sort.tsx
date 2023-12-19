import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconSort = ({size = 24, color = '#222222'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M5 7H19" stroke={color} strokeLinecap="round" />
      <Path d="M5 12H15" stroke={color} strokeLinecap="round" />
      <Path d="M5 17H11" stroke={color} strokeLinecap="round" />
    </Svg>
  );
};

export default IconSort;
