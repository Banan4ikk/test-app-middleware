import styled from 'styled-components/native';
import { lightBackgroundColor, mainBackgroundColor, mainColor } from '../../../styles/colors';

type Props = {
  color?: string;
};

export const ButtonStyled = styled.TouchableHighlight<Props>`
  width: 100%;
  padding: 15px 0 15px 0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${({ disabled }) => (disabled ? lightBackgroundColor : mainBackgroundColor)};
`;

export const ButtonText = styled.Text`
  font-family: 'Manrope-SemiBold';
  font-size: 17px;
  line-height: 22px;
  color: ${mainColor};
`;
