import React, { useState } from 'react';
import { ScreenWithProps } from '../../../navigation/ScreenParams';
import NavigationHeader from '../../../components/NavigationHeader';
import ContainerWithLogo from '../../../components/ContainerWithLogo';
import { BlueText, CellStyled, CellText, CodeContainer, StyledContainer, TitleText } from './styles';
import { CodeField } from 'react-native-confirmation-code-field';
import SimpleButton from '../../../components/buttons/SimpleButton';
import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../redux/store';
import { SafeAreaView } from 'react-native';
import { Container } from '../../../styles/global';
import { authenticationSlice } from '../../../redux/auth/slice';

type FormValues = {
  code: string;
};

const RegistrationCodeScreen: ScreenWithProps<'RegistrationCodeScreen'> = ({ navigation, route }) => {
  const { phoneNumber } = route.params;

  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      code: '',
    },
  });

  const onSave = ({ code }: FormValues) => {
    dispatch(authenticationSlice.login({ code, credential: phoneNumber }));
  };

  return (
    <Container>
      <NavigationHeader navigation={navigation} allowGoBack withCrossIcon title="Вход" />
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
    </Container>
  );
};

export default RegistrationCodeScreen;
