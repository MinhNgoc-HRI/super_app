import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconUserRound = ({size = 24, color = '#33363F'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="10" r="3" stroke={color} strokeLinecap="round" />
      <Circle cx="12" cy="12" r="9" stroke={color} />
      <Path
        d="M18 18.7059C17.6461 17.6427 16.8662 16.7033 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.13375 16.7033 6.35391 17.6427 6 18.7059"
        stroke={color}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default IconUserRound;