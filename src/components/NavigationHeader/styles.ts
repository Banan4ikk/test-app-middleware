import styled from 'styled-components/native';
import { mainColor } from '../../styles/colors';
import { Centralize } from '../../styles/global';

export const HeaderContainer = styled(Centralize)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 25px;
  padding: 0 20px 0 20px;
`;

export const StyledText = styled.Text`
  font-family: 'Manrope-SemiBold';
  font-size: 18px;
  color: ${mainColor};
  transform: translateY(-2px);
`;
