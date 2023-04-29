import React, { FC } from 'react';
import { ButtonStyled, ButtonText } from './styles';
import { ButtonProps, TouchableHighlight, TouchableHighlightProps } from 'react-native';

type Props = TouchableHighlightProps & {
  color?: string;
  title: string;
  onPress: () => void;
};

const ButtonWithBorder: FC<Props> = ({ color, title, onPress, ...props }) => {
  return (
    <ButtonStyled underlayColor={'rgba(255,255,255,0.2)'} color={color} onPress={onPress} {...props}>
      <ButtonText>{title}</ButtonText>
    </ButtonStyled>
  );
};

export default ButtonWithBorder;
