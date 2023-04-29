import React, { FC } from 'react';
import { ButtonStyled, ButtonText } from './styles';

type Props = {
  color?: string;
  title: string;
  onPress: () => void;
};

const ButtonWithBorder: FC<Props> = ({ color, title, onPress }) => {
  return (
    <ButtonStyled underlayColor={'rgba(255,255,255,0.2)'} color={color} onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonStyled>
  );
};

export default ButtonWithBorder;
