import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconSearch = ({size = 24, color = '#222222'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="11" cy="11" r="6" stroke={color} />
      <Path d="M20 20L17 17" stroke={color} strokeLinecap="round" />
    </Svg>
  );
};

export default IconSearch;
