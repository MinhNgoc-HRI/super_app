import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconCancel = ({size = 24, color = '#222222'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="9" stroke={color} />
      <Path d="M18 18L6 6" stroke={color} />
    </Svg>
  );
};

export default IconCancel;
