import React from 'react';
import { ScreenWithProps } from '../../../navigation/ScreenParams';
import { RegisterContainer, StyledContainer, Title } from './styles';
import ButtonWithBorder from '../../../components/buttons/ButtonWithBorder';

const RegisterScreen: ScreenWithProps<'RegisterScreen'> = ({ navigation }) => {
  const onRegister = () => {
    navigation.navigate('UserDataRegisterScreen', { mode: 'register' });
  };

  const onEnter = () => {
    navigation.navigate('UserDataRegisterScreen', { mode: 'enter' });
  };

  return (
    <StyledContainer>
      <RegisterContainer>
        <Title fontSize={21} paddingBottom={16}>
          Регистрация вход
        </Title>
        <ButtonWithBorder
          title="Регистрация"
          onPress={onRegister}
          style={{
            marginBottom: 20,
          }}
        />
        <ButtonWithBorder title="Вход" onPress={onEnter} />
      </RegisterContainer>
    </StyledContainer>
  );
};

export default RegisterScreen;
