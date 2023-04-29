import styled from 'styled-components/native';
import { alabasterWhite, frenchGray, mainBackgroundColor, mainColor } from '../../../styles/colors';
import { Centralize, Container } from '../../../styles/global';

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

export const CodeContainer = styled.View`
  width: auto;
  align-self: center;
  justify-content: space-between;
  padding: 15px 0 15px 0;
`;

export const TitleText = styled.Text`
  font-family: 'Manrope-Bold';
  font-size: 21px;
  line-height: 28px;
  color: #000;
  text-align: center;
`;

export const CellStyled = styled(Centralize)<{ focused?: boolean }>`
  width: 40px;
  height: 50px;
  border-radius: 8px;
  background-color: ${alabasterWhite};
  border: 1px solid ${({ focused }) => (focused ? mainBackgroundColor : frenchGray)};
  margin-right: 6px;
`;

export const CellText = styled.Text`
  font-family: 'Manrope-Regular';
  font-size: 28px;
  color: #000;
`;

export const BlueText = styled.Text`
  color: ${mainBackgroundColor};
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  font-family: 'Manrope-SemiBold';
`;
