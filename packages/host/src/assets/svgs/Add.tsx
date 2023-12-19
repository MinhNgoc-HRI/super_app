import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconAdd = ({size = 24, color = '#33363F'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 6L12 18"
        stroke={color}
        strokeWidth="2"
        stroke-linecap="round"
      />
      <Path
        d="M18 12L6 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default IconAdd;
