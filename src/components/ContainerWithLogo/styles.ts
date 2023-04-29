import styled from 'styled-components/native';
import { mainColor } from '../../styles/colors';
import { ImageContainer } from '../../styles/global';

export const WhiteContainer = styled.View`
  background-color: ${mainColor};
  flex: 1;
  border-radius: 16px 16px 0 0;
  margin-top: 15px;
  padding: 0 15px 0 15px;
  overflow: visible;
  z-index: 1000;
`;

export const StyledImageContainer = styled(ImageContainer)`
  align-self: center;
  transform: translateY(-16px);
  overflow: visible;
  z-index: 1000;
`;
