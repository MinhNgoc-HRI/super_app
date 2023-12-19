import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconFilter = ({size = 24, color = '#222222'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M5 12L5 4" stroke={color} strokeLinecap="round" />
      <Path d="M19 20L19 17" stroke={color} strokeLinecap="round" />
      <Path d="M5 20L5 16" stroke={color} strokeLinecap="round" />
      <Path d="M19 13L19 4" stroke={color} strokeLinecap="round" />
      <Path d="M12 7L12 4" stroke={color} strokeLinecap="round" />
      <Path d="M12 20L12 11" stroke={color} strokeLinecap="round" />
      <Circle cx="5" cy="14" r="2" stroke={color} strokeLinecap="round" />
      <Circle cx="12" cy="9" r="2" stroke={color} strokeLinecap="round" />
      <Circle cx="19" cy="15" r="2" stroke={color} strokeLinecap="round" />
    </Svg>
  );
};

export default IconFilter;
