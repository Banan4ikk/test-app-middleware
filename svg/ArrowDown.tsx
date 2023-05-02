import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ArrowDown = (props: SvgProps) => (
  <Svg width={10} height={6} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="m1 1 4 4 4-4" stroke="#000" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export default ArrowDown;
