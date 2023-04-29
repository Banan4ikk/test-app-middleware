import React, { FC, PropsWithChildren } from 'react';
import { StyledImageContainer, WhiteContainer } from './styles';
import { FillImage, ImageContainer } from '../../styles/global';
import { ViewStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ContainerWithLogo: FC<PropsWithChildren<{ scrollable?: boolean }>> = ({ children, scrollable = false }) => {
  return (
    <WhiteContainer>
      <StyledImageContainer height={60} width={60}>
        <FillImage source={require('../../../assets/logo.png')} />
      </StyledImageContainer>
      <KeyboardAwareScrollView
        extraScrollHeight={200}
        enableOnAndroid
        enableAutomaticScroll
        showsVerticalScrollIndicator={false}
        scrollEnabled={scrollable}>
        {children}
      </KeyboardAwareScrollView>
    </WhiteContainer>
  );
};

export default ContainerWithLogo;
