import React, { useState } from 'react';
import { ScreenWithProps } from '../../../navigation/ScreenParams';
import NavigationHeader from '../../../components/NavigationHeader';
import ContainerWithLogo from '../../../components/ContainerWithLogo';
import { FieldContainer, FieldText, StyledContainer, TitleText } from './styles';
import SimpleButton from '../../../components/buttons/SimpleButton';
import { Controller, FieldError, useForm } from 'react-hook-form';
import PhoneInput from '../../../components/PhoneInput';
import { StatusType } from '../../../components/TextInputForEdit';
import { authenticationSlice } from '../../../redux/auth/slice';
import { useAppDispatch } from '../../../redux/store';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormValues = {
  phone: string;
};

const PHONE_INPUT_MASK = [
  '+',
  '7',
  ' ',
  '(',
  /\d/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];

const Schema = yup.object().shape({
  phone: yup.string().required(),
});

const PhoneScreen: ScreenWithProps<'PhoneScreen'> = ({ navigation, route }) => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({
    defaultValues: {
      phone: '',
    },
    resolver: yupResolver(Schema),
  });

  const selectCurrentFieldStatus = (isTouched: boolean, error: FieldError | undefined): StatusType => {
    if (isTouched && error) {
      return 'danger';
    }
    if (isTouched && !error) {
      return 'success';
    }
    return 'primary';
  };

  const onSave = ({ phone }: FormValues) => {
    dispatch(authenticationSlice.confirmCode({ phone }));
    navigation.navigate('RegistrationCodeScreen', { phoneNumber: phone });
  };

  return (
    <StyledContainer>
      <NavigationHeader navigation={navigation} allowGoBack withCrossIcon title="Вход" />
      <ContainerWithLogo>
        <TitleText>Введите Номер телефона</TitleText>
        <FieldContainer>
          <FieldText>Телефон</FieldText>
          <Controller
            control={control}
            name="phone"
            key="phone"
            render={({ field, fieldState: { isTouched, error } }) => (
              <PhoneInput
                status={selectCurrentFieldStatus(isTouched, error)}
                onChangeText={(masked, unmasked) => {
                  field.onChange(unmasked);
                }}
                placeholder="+7 (___) ___-__-__"
                textContentType="telephoneNumber"
                key="phone"
                returnKeyType="done"
                keyboardType="phone-pad"
                mask={PHONE_INPUT_MASK}
                {...field}
              />
            )}
          />
        </FieldContainer>
        <SimpleButton disabled={!isValid} title="Продолжить" onPress={handleSubmit(onSave)} style={{ marginTop: 16 }} />
      </ContainerWithLogo>
    </StyledContainer>
  );
};

export default PhoneScreen;
