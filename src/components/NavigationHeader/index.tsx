import React, { FC } from 'react';
import { HeaderContainer, StyledText } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CrossIcon from '../../../svg/CrossIcon';
import { NavigationProp } from '@react-navigation/native';
import { ScreenParams } from '../../navigation/ScreenParams';
import { Pressable } from 'react-native';

type HeaderProps = {
  title: string;
  navigation: NavigationProp<ScreenParams>;
  withCrossIcon?: boolean;
  allowGoBack?: boolean;
};

const NavigationHeader: FC<HeaderProps> = ({ withCrossIcon, title, navigation, allowGoBack }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <HeaderContainer>
      {withCrossIcon && (
        <Pressable disabled={!allowGoBack} onPress={goBack}>
          <CrossIcon style={{ marginRight: 15 }} />
        </Pressable>
      )}
      <StyledText>{title}</StyledText>
    </HeaderContainer>
  );
};

export default NavigationHeader;
