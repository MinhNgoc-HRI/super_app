import React from 'react';
import Svg, {Circle, Path, Rect} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconPhone = ({size = 24, color = '#222222'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M10 2.5H9.5V3C9.5 3.00908 9.5 3.01815 9.5 3.0272C9.49995 3.23924 9.49991 3.4453 9.52276 3.61526C9.54852 3.80686 9.61129 4.0255 9.79289 4.20711C9.9745 4.38871 10.1931 4.45148 10.3847 4.47724C10.5547 4.50009 10.7608 4.50005 10.9728 4.5C10.9819 4.5 10.9909 4.5 11 4.5H13C13.0091 4.5 13.0181 4.5 13.0272 4.5C13.2392 4.50005 13.4453 4.50009 13.6153 4.47724C13.8069 4.45148 14.0255 4.38871 14.2071 4.20711C14.3887 4.0255 14.4515 3.80686 14.4772 3.61526C14.5001 3.4453 14.5 3.23924 14.5 3.0272C14.5 3.01815 14.5 3.00908 14.5 3V2.5H14H10Z"
        stroke={color}
      />
      <Rect x="6.5" y="2.5" width="11" height="19" rx="1.5" stroke={color} />
      <Circle cx="12" cy="18" r="1" fill={color} />
    </Svg>
  );
};

export default IconPhone;
