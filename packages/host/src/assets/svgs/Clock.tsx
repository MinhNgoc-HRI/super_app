import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconClock = ({size = 24, color = '#33363F'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="8.5" stroke={color} />
      <Path
        d="M5 2.80385C4.08789 3.33046 3.33046 4.08788 2.80385 5"
        stroke={color}
        strokeLinecap="round"
      />
      <Path
        d="M19 2.80385C19.9121 3.33046 20.6695 4.08788 21.1962 5"
        stroke={color}
        strokeLinecap="round"
      />
      <Path
        d="M12 6.5V11.75C12 11.8881 12.1119 12 12.25 12H16.5"
        stroke={color}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default IconClock;
