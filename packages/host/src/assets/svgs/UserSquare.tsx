import React from 'react';
import Svg, {Path, Circle, Rect} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconUserSquare = ({size = 24, color = '#33363F'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M17.9334 21.2571C17.7171 20.0575 16.9849 18.9644 15.8732 18.1813C14.7615 17.3983 13.346 16.9787 11.8906 17.0008C10.4352 17.0229 9.0391 17.4852 7.96236 18.3015C6.88562 19.1178 6.20171 20.2325 6.03804 21.4378"
        stroke={color}
      />
      <Circle cx="12" cy="10" r="3" stroke={color} strokeLinecap="round" />
      <Rect x="2.5" y="2.5" width="19" height="19" rx="3.5" stroke={color} />
    </Svg>
  );
};

export default IconUserSquare;
