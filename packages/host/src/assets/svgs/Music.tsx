import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const IconMusic = ({size = 24, color = '#222222'}: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 16H6.25245C6.018 16 5.90078 16 5.80205 16.0098C4.85403 16.1041 4.10411 16.854 4.00982 17.802C4 17.9008 4 18.018 4 18.2525V18.2525C4 18.5322 4 18.6721 4.01244 18.7831C4.13321 19.8608 5.0909 20.646 6.17139 20.553C6.28269 20.5435 6.41986 20.516 6.69419 20.4612L6.99029 20.4019C7.37076 20.3258 7.56099 20.2878 7.7215 20.2257C8.3765 19.9724 8.85063 19.394 8.9706 18.7021C9 18.5325 9 18.3385 9 17.9505V9.27922C9 7.70946 9 6.92459 9.45332 6.37163C9.90663 5.81867 10.6763 5.66475 12.2155 5.35689L14.2155 4.95689C16.4291 4.51417 17.536 4.29281 18.268 4.89292C19 5.49304 19 6.62176 19 8.87922V9M19 14V15.9505C19 16.3385 19 16.5325 18.9706 16.7021C18.8506 17.394 18.3765 17.9724 17.7215 18.2257C17.561 18.2878 17.3708 18.3258 16.9903 18.4019L16.6942 18.4612C16.4199 18.516 16.2827 18.5435 16.1714 18.553C15.0909 18.646 14.1332 17.8608 14.0124 16.7831C14 16.6721 14 16.5322 14 16.2525V16.2525C14 16.018 14 15.9008 14.0098 15.802C14.1041 14.854 14.854 14.1041 15.802 14.0098C15.9008 14 16.018 14 16.2525 14H19ZM19 14V9M19 9L9 11"
        stroke={color}
      />
    </Svg>
  );
};

export default IconMusic;
