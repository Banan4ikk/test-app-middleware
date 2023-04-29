import styled from 'styled-components/native';
import { mainColor } from '../../../styles/colors';
import { Container } from '../../../styles/global';

export const LogoImage = styled.Image`
  width: 112px;
  height: 112px;
`;

type PropsTitle = { fontSize?: number; paddingBottom?: number; paddingTop?: number };

export const StyledContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text<PropsTitle>`
  font-family: 'Manrope-SemiBold';
  font-size: ${props => `${props.fontSize || 30}px`};
  line-height: 40px;
  text-align: center;
  color: ${mainColor};
  margin-top: 16px;
  padding-bottom: ${({ paddingBottom }) => `${paddingBottom || 0}px`};
`;

export const RegisterContainer = styled.View<{ bottom?: number }>`
  width: 100%;
  margin-top: 50px;
  transform: translateY(120px);
`;
