import styled from 'styled-components/native';
import { alabasterWhite, frenchGray, mainBackgroundColor, mainColor, textBlack } from '../../../styles/colors';
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
  margin-bottom: 15px;
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

export const FieldContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const FieldText = styled.Text`
  font-family: 'Manrope-SemiBold';
  font-size: 13px;
  line-height: 16px;
  color: ${textBlack};
  max-width: 65px;
`;
