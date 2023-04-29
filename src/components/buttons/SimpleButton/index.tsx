import React, { FC } from 'react';
import { ButtonStyled, ButtonText } from './styles';
import { ButtonProps, TouchableHighlightProps, ViewStyle } from 'react-native';

type Props = {
  color?: string;
  title: string;
  onPress: () => void;
  style?: ViewStyle;
};

const SimpleButton: FC<Props & TouchableHighlightProps> = ({ color, title, onPress, style, ...props }) => {
  return (
    <ButtonStyled style={style} underlayColor="#3472ef" color={color} onPress={onPress} {...props}>
      <ButtonText>{title}</ButtonText>
    </ButtonStyled>
  );
};

export default SimpleButton;
