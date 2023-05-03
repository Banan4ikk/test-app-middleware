import styled from 'styled-components/native';
import { mainColor } from '../../../styles/colors';

type Props = {
  color?: string;
};

export const ButtonStyled = styled.TouchableHighlight<Props>`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 2px solid ${props => props.color || mainColor};
  //border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Manrope-Bold';
  font-size: 17px;
  line-height: 22px;
  color: ${mainColor};
`;
