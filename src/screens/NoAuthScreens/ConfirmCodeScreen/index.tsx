import React, { useState } from 'react';
import { ScreenWithProps } from '../../../navigation/ScreenParams';
import NavigationHeader from '../../../components/NavigationHeader';
import { Container } from '../../../styles/global';
import ContainerWithLogo from '../../../components/ContainerWithLogo';
import { BlueText, CellStyled, CellText, CodeContainer, StyledContainer, TitleText } from './styles';
import { CodeField } from 'react-native-confirmation-code-field';
import SimpleButton from '../../../components/buttons/SimpleButton';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import authSlice, { authenticationSlice } from '../../../redux/auth/slice';
import { useAppDispatch } from '../../../redux/store';

type FormValues = {
  code: string;
};

const RegistrationCodeScreen: ScreenWithProps<'RegistrationCodeScreen'> = ({ navigation, route }) => {
  const { mode, phoneNumber } = route.params;
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      code: '',
    },
  });

  const onSave = ({ code }: FormValues) => {
    if (mode === 'enter' && phoneNumber) {
      dispatch(authenticationSlice.login({ code, credentials: phoneNumber }));
    }
    dispatch(authSlice.actions.setConfirmCode(code));
  };

  return (
    <StyledContainer>
      <NavigationHeader
        navigation={navigation}
        allowGoBack
        withCrossIcon
        title={mode === 'register' ? 'Регистрация' : 'Вход'}
      />
      <ContainerWithLogo>
        <TitleText>Введите код авторизации</TitleText>
        <CodeContainer>
          <Controller
            render={({ field }) => (
              <CodeField
                {...field}
                value={field.value}
                onChangeText={field.onChange}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                cellCount={6}
                renderCell={({ index, symbol, isFocused }) => (
                  <CellStyled key={index} focused={isFocused}>
                    <CellText>{symbol}</CellText>
                  </CellStyled>
                )}
              />
            )}
            name="code"
            control={control}
          />
        </CodeContainer>
        <BlueText>Запросить код авторизации</BlueText>
        <SimpleButton title="Продолжить" onPress={handleSubmit(onSave)} style={{ marginTop: 16 }} />
      </ContainerWithLogo>
    </StyledContainer>
  );
};

export default RegistrationCodeScreen;
