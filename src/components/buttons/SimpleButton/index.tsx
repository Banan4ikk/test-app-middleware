import React, { FC } from 'react';
import { ButtonStyled, ButtonText } from './styles';
import { ViewStyle } from 'react-native';

type Props = {
  color?: string;
  title: string;
  onPress: () => void;
  style?: ViewStyle;
};

const SimpleButton: FC<Props> = ({ color, title, onPress, style }) => {
  return (
    <ButtonStyled style={style} underlayColor={'#3472ef'} color={color} onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonStyled>
  );
};

export default SimpleButton;
