import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconChart = ({size = 24, color = '#222222'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21 6L15.7071 11.2929C15.3166 11.6834 14.6834 11.6834 14.2929 11.2929L12.7071 9.70711C12.3166 9.31658 11.6834 9.31658 11.2929 9.70711L7 14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 3V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H21"
        stroke={color}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default IconChart;
