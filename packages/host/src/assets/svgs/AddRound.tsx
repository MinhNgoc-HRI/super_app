import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconAddRound = ({size = 24, color = '#33363F'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={9} stroke={color} />
      <Path d="M12 15L12 9" stroke={color} stroke-linecap="square" />
      <Path d="M15 12L9 12" stroke={color} stroke-linecap="square" />
    </Svg>
  );
};

export default IconAddRound;
