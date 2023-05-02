import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { mainBackgroundColor } from '../src/styles/colors';

const CrossIcon = (props: SvgProps) => (
  <Svg
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m1 1 14 14M15 1 1 15"
      stroke={props.stroke || '#fff'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CrossIcon;
