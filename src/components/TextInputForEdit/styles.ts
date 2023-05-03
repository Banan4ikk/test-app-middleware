import styled from 'styled-components/native';
import { mainColor, redError } from '../../styles/colors';

export const StyledTextInput = styled.TextInput<{ borderColor: string; bgColor?: string }>`
  width: 100%;
  border: 1px solid ${({ borderColor }) => borderColor};
  background-color: ${({ bgColor }) => bgColor || mainColor};
  //border-radius: 8px;
  padding: 14px 10px 14px 16px;
`;

export const ErrorText = styled.Text`
  position: absolute;
  right: 10px;
  top: 35%;
  font-size: 12px;
  line-height: 16px;
  color: ${redError};
`;

export const ErrorContainer = styled.View`
  width: 75%;
  display: flex;
  flex-direction: row;
`;
