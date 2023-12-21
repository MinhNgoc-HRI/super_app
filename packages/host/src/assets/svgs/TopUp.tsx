import React from 'react';
import Svg, {Circle, Path, Rect} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconTopUp = ({size = 24, color = '#FF6E00'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <Rect width="48" height="48" rx="24" fill="#FAFAFB" />
      <Rect
        x="0.5"
        y="0.5"
        width="47"
        height="47"
        rx="23.5"
        stroke="#4A4A4A"
        stroke-opacity="0.05"
      />
      <Path
        d="M17 15.5V13C17 10.7909 18.7909 9 21 9H31C33.2091 9 35 10.7909 35 13V35C35 37.2091 33.2091 39 31 39H21C18.7909 39 17 37.2091 17 35V32"
        stroke="#333333"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Circle cx="18" cy="24" r="8" stroke={color} stroke-width="2" />
      <Path
        d="M21 9V11C21 12.1046 21.8954 13 23 13H29C30.1046 13 31 12.1046 31 11V9"
        stroke="#333333"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M23 34H29"
        stroke="#333333"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18 19V20"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18 28V29"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M20 22C20 21 19 20 18 20C17 20 16 20.5 16 22C16 23.5 20 24.5 20 26C20 27 19.5 28 18 28C16.5 28 16 27 16 26"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default IconTopUp;
