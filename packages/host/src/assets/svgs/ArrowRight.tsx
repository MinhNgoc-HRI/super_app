import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const ArrowRight = ({size = 24, color = '#222222'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 12L18.7071 11.2929L19.4142 12L18.7071 12.7071L18 12ZM6 13C5.44771 13 5 12.5523 5 12C5 11.4477 5.44771 11 6 11V13ZM14.7071 7.29289L18.7071 11.2929L17.2929 12.7071L13.2929 8.70711L14.7071 7.29289ZM18.7071 12.7071L14.7071 16.7071L13.2929 15.2929L17.2929 11.2929L18.7071 12.7071ZM18 13H6V11H18V13Z"
        fill={color}
      />
    </Svg>
  );
};

export default ArrowRight;
