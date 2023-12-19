import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconCredit = ({size = 24, color = '#222222'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3.5 9.398C3.5 8.37292 3.5 7.86038 3.70266 7.47025C3.87343 7.14149 4.14149 6.87343 4.47025 6.70266C4.86038 6.5 5.37292 6.5 6.398 6.5H17.602C18.6271 6.5 19.1396 6.5 19.5298 6.70266C19.8585 6.87343 20.1266 7.14149 20.2973 7.47025C20.5 7.86038 20.5 8.37292 20.5 9.398V15.602C20.5 16.6271 20.5 17.1396 20.2973 17.5298C20.1266 17.8585 19.8585 18.1266 19.5298 18.2973C19.1396 18.5 18.6271 18.5 17.602 18.5H6.398C5.37292 18.5 4.86038 18.5 4.47025 18.2973C4.14149 18.1266 3.87343 17.8585 3.70266 17.5298C3.5 17.1396 3.5 16.6271 3.5 15.602V9.398Z"
        stroke={color}
      />
      <Path d="M3.5 10.5L20.5 10.5" stroke={color} strokeLinecap="round" />
      <Circle cx="6.5" cy="15.5" r="0.5" fill={color} />
    </Svg>
  );
};

export default IconCredit;
