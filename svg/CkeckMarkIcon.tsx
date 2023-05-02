import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CheckMarkIcon = (props: SvgProps) => (
  <Svg width={11} height={8} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M10 1 3.812 7 1 4.273"
      stroke={props.stroke || '#00C56D'}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CheckMarkIcon;
