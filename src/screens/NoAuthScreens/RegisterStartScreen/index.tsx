import React from 'react';
import { ScreenWithProps } from '../../../navigation/ScreenParams';
import { LogoImage, RegisterContainer, StyledContainer, Title } from './styles';
import { Image } from 'react-native';
import ButtonWithBorder from '../../../components/buttons/ButtonWithBorder';

const RegisterScreen: ScreenWithProps<'RegisterScreen'> = ({ navigation, route }) => {
  const onPress = () => {
    navigation.navigate('UserDataRegisterScreen');
  };

  return (
    <StyledContainer>
      <LogoImage source={require('../../../../assets/logo.png')} />
      <Title>Программа{'\n'} поддержки пациентов и врачей</Title>
      <RegisterContainer>
        <Title fontSize={21} paddingBottom={16}>
          Регистрация
        </Title>
        <ButtonWithBorder title="Врач" onPress={onPress} />
      </RegisterContainer>
    </StyledContainer>
  );
};

export default RegisterScreen;
