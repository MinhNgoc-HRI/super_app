import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconDate = ({size = 24, color = '#222222'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect x="3" y="6" width="18" height="15" rx="2" stroke={color} />
      <Path d="M3 11L21 11" stroke={color} strokeLinecap="round" />
      <Path d="M9 16H15" stroke={color} strokeLinecap="round" />
      <Path d="M8 3L8 7" stroke={color} strokeLinecap="round" />
      <Path d="M16 3L16 7" stroke={color} strokeLinecap="round" />
    </Svg>
  );
};

export default IconDate;
