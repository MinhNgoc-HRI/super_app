import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconUnlock = ({size = 24, color = '#222222'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 13.0002C4 11.1146 4 10.1718 4.58579 9.58603C5.17157 9.00024 6.11438 9.00024 8 9.00024H16C17.8856 9.00024 18.8284 9.00024 19.4142 9.58603C20 10.1718 20 11.1146 20 13.0002V15.0002C20 17.8287 20 19.2429 19.1213 20.1216C18.2426 21.0002 16.8284 21.0002 14 21.0002H10C7.17157 21.0002 5.75736 21.0002 4.87868 20.1216C4 19.2429 4 17.8287 4 15.0002V13.0002Z"
        stroke={color}
      />
      <Path
        d="M16.4999 9.00006L16.5775 8.37947C16.8364 6.30788 15.9043 4.2675 14.1688 3.10709V3.10709C12.1023 1.72543 9.36726 1.89573 7.48819 3.52305L6.66986 4.23174"
        stroke={color}
        strokeLinecap="round"
      />
      <Circle cx="12" cy="15" r="2" fill={color} />
    </Svg>
  );
};

export default IconUnlock;
