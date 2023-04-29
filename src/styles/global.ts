import styled from 'styled-components/native';
import { mainBackgroundColor } from './colors';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${mainBackgroundColor};
`;

export const Centralize = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FillImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.View<{ width: number; height: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;
