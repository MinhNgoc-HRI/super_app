import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconInfo = ({size = 24, color = '#222222'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="9" stroke={color} />
      <Path
        d="M12.5 7.5C12.5 7.77614 12.2761 8 12 8C11.7239 8 11.5 7.77614 11.5 7.5C11.5 7.22386 11.7239 7 12 7C12.2761 7 12.5 7.22386 12.5 7.5Z"
        fill={color}
      />
      <Path d="M12 17V10" stroke={color} />
    </Svg>
  );
};

export default IconInfo;
