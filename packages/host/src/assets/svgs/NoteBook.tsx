import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconNoteBook = ({size = 24, color = '#222222'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect x="6" y="4" width="13" height="17" rx="2" stroke={color} />
      <Path d="M15 10V8" stroke={color} strokeLinecap="round" />
      <Path d="M4 9H8" stroke={color} strokeLinecap="round" />
      <Path d="M4 13H8" stroke={color} strokeLinecap="round" />
      <Path d="M4 17H8" stroke={color} strokeLinecap="round" />
    </Svg>
  );
};

export default IconNoteBook;
