import styled from 'styled-components/native';
import { ErrorContainer } from '../TextInputForEdit/styles';
import { mainBackgroundColor } from '../../styles/colors';

export const ViewContainer = styled.View`
  width: 75%;
  flex-direction: column;
`;

export const FileContainer = styled.Pressable`
  border: 1px dashed ${mainBackgroundColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 14px 10px 14px 16px;
  border-radius: 8px;
`;

export const SelectFileText = styled.Text`
  font-size: 15px;
  color: ${mainBackgroundColor};
  font-family: 'Manrope-Regular';
`;

export const FileView = styled.View`
  padding: 6px 12px 6px 12px;
  border-radius: 18px;
  background-color: #e9f0fe;
  margin-top: 10px;
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
`;
