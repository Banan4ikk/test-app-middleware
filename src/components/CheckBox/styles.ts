import styled from 'styled-components/native';
import { greenSuccess } from '../../styles/colors';

export const CheckBoxContainer = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #bcc3d080;
`;

export const ActiveCheckBox = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: ${greenSuccess};
  display: flex;
  justify-content: center;
  align-items: center;
`;
