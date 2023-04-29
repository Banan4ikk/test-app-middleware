import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ClipIcon = (props: SvgProps) => (
  <Svg width={12} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M8 15V7c0-1.1-.9-2-2-2s-2 .9-2 2v7M1 6v9M11 6v7M8 15v.5C8 17.4 6.4 19 4.5 19S1 17.4 1 15.5V15"
      stroke="#1E63EE"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11 6c0-2.8-2.2-5-5-5S1 3.2 1 6"
      stroke="#1E63EE"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ClipIcon;
