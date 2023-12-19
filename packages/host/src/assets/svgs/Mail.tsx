import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconMail = ({size = 24, color = '#222222'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect x="4" y="6" width="16" height="12" rx="2" stroke={color} />
      <Path
        d="M4 9L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L20 9"
        stroke={color}
      />
    </Svg>
  );
};

export default IconMail;
