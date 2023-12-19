import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconDateRange = ({size = 24, color = '#222222'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect x="3" y="6" width="18" height="15" rx="2" stroke={color} />
      <Path d="M7 3L7 6" stroke={color} strokeLinecap="round" />
      <Path d="M17 3L17 6" stroke={color} strokeLinecap="round" />
      <Rect x="7" y="12" width="4" height="2" rx="0.5" fill={color} />
      <Rect x="7" y="16" width="4" height="2" rx="0.5" fill={color} />
      <Rect x="13" y="12" width="4" height="2" rx="0.5" fill={color} />
      <Rect x="13" y="16" width="4" height="2" rx="0.5" fill={color} />
    </Svg>
  );
};

export default IconDateRange;
