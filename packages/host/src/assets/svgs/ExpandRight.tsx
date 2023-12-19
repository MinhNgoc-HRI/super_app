import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconExpandRight = ({size = 24, color = '#222222'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M9 6L15 12L9 18" stroke={color} />
    </Svg>
  );
};

export default IconExpandRight;
