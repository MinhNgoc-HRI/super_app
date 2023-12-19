import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconExpandLeft = ({size = 24, color = '#222222'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M15 6L9 12L15 18" stroke={color} />
    </Svg>
  );
};

export default IconExpandLeft;
