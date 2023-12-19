import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconLock = ({size = 24, color = '#222222'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="15" r="2" fill={color} />
      <Path
        d="M4.5 13.5C4.5 11.6144 4.5 10.6716 5.08579 10.0858C5.67157 9.5 6.61438 9.5 8.5 9.5H15.5C17.3856 9.5 18.3284 9.5 18.9142 10.0858C19.5 10.6716 19.5 11.6144 19.5 13.5V14.5C19.5 17.3284 19.5 18.7426 18.6213 19.6213C17.7426 20.5 16.3284 20.5 13.5 20.5H10.5C7.67157 20.5 6.25736 20.5 5.37868 19.6213C4.5 18.7426 4.5 17.3284 4.5 14.5V13.5Z"
        stroke={color}
      />
      <Path
        d="M16.5 9.5V8C16.5 5.51472 14.4853 3.5 12 3.5V3.5C9.51472 3.5 7.5 5.51472 7.5 8V9.5"
        stroke={color}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default IconLock;
