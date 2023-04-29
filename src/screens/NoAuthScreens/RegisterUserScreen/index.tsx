import React, { useState } from 'react';
import { ScreenWithProps } from '../../../navigation/ScreenParams';
import * as Yup from 'yup';
import { Container } from '../../../styles/global';
import NavigationHeader from '../../../components/NavigationHeader';
import ContainerWithLogo from '../../../components/ContainerWithLogo';
import { Controller, FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextInputForEdit, { StatusType } from '../../../components/TextInputForEdit';
import { FieldContainer, FieldText } from './styles';
import PhoneInput from '../../../components/PhoneInput';
import SimpleButton from '../../../components/buttons/SimpleButton';
import { mixed } from 'yup';
import phoneInput from '../../../components/PhoneInput';

interface IFormValues {
  name: string;
  lastname: string;
  middleName: string;
  phoneNumber: string;
  email: string;
  inn: string;
}

const formSchema = Yup.object().shape({
  name: Yup.string().required(),
  lastname: Yup.string().required(),
  middleName: Yup.string().required(),
  phoneNumber: Yup.string().notRequired(),
  email: Yup.string().required(),
  inn: Yup.string().notRequired(),
});
/*eslint-disable*/
const PHONE_INPUT_MASK = ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

const RegisterUserScreen: ScreenWithProps<'RegisterUserScreen'> = ({navigation, route}) => {
  const {mode} = route.params;

  const {
    control,
    getValues,
    setError,
    watch,
    formState: {isValid}
  } = useForm<IFormValues>({
    defaultValues: {
      email: '',
      lastname: '',
      middleName: '',
      name: '',
      phoneNumber: '',
      inn: '',
    },
    resolver: yupResolver(formSchema),
    mode: 'all',
    criteriaMode: 'all',
    shouldUnregister: false,
  });

  const phoneNumber = watch('phoneNumber')
  const isValidButton = mode !== 'register' ? phoneNumber.length === 10 : isValid;

  const selectCurrentFieldStatus = (isTouched: boolean, error: FieldError | undefined): StatusType => {
    if (isTouched && error) {
      return 'danger';
    }
    if (isTouched && !error) {
      return 'success';
    }
    return 'primary';
  };

  const onSubmit = () => {
    const values = getValues();
    if (mode === 'register') {
      if (values.email === '') {
        setError('phoneNumber', {message: 'Укажите почту или номер телефона'})
      } else {
        navigation.navigate('RegistrationCodeScreen', {mode})
      }
    } else {
      const phone = `+7${phoneNumber}`
      navigation.navigate('RegistrationCodeScreen', {mode, phoneNumber: phone})
    }
  }

  return (
    <Container>
      <NavigationHeader navigation={navigation} allowGoBack withCrossIcon title="Регистрация"/>
      <ContainerWithLogo scrollable>
        <FieldContainer>
          <FieldText>Телефон</FieldText>
          <Controller
            control={control}
            name="phoneNumber"
            key="phoneNumber"
            render={({field, fieldState: {isTouched, error}}) => (
              <PhoneInput
                status={selectCurrentFieldStatus(isTouched, error)}
                onChangeText={(masked, unmasked) => {
                  field.onChange(unmasked)
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
        {mode === 'register' &&
          <>
            <FieldContainer>
              <FieldText>Фамилия</FieldText>
              <Controller
                control={control}
                name="lastname"
                key="lastname"
                render={({field, fieldState: {isTouched, error}}) => (
                  <TextInputForEdit
                    status={selectCurrentFieldStatus(isTouched, error)}
                    onChangeText={field.onChange}
                    placeholder="Фамилия"
                    {...field}
                  />
                )}
              />
            </FieldContainer>
            <FieldContainer>
              <FieldText>Имя</FieldText>
              <Controller
                control={control}
                name="name"
                key="name"
                render={({field, fieldState: {isTouched, error}}) => (
                  <TextInputForEdit
                    status={selectCurrentFieldStatus(isTouched, error)}
                    onChangeText={field.onChange}
                    placeholder="Имя"
                    {...field}
                  />
                )}
              />
            </FieldContainer>
            <FieldContainer>
              <FieldText>Отчество</FieldText>
              <Controller
                control={control}
                name="middleName"
                key="middleName"
                render={({field, fieldState: {isTouched, error}}) => (
                  <TextInputForEdit
                    status={selectCurrentFieldStatus(isTouched, error)}
                    onChangeText={field.onChange}
                    placeholder="Отчество"
                    {...field}
                  />
                )}
              />
            </FieldContainer>
            <FieldContainer>
              <FieldText>Email</FieldText>
              <Controller
                control={control}
                name="email"
                key="email"
                render={({field, fieldState: {isTouched, error}}) => (
                  <TextInputForEdit
                    status={selectCurrentFieldStatus(isTouched, error)}
                    onChangeText={field.onChange}
                    placeholder="Email"
                    {...field}
                  />
                )}
              />
            </FieldContainer>
            <FieldContainer>
              <FieldText>ИНН</FieldText>
              <Controller
                control={control}
                name="inn"
                key="inn"
                render={({field, fieldState: {isTouched, error}}) => (
                  <TextInputForEdit
                    status={selectCurrentFieldStatus(isTouched, error)}
                    onChangeText={field.onChange}
                    placeholder="ИНН"
                    {...field}
                  />
                )}
              />
            </FieldContainer>
          </>
        }

        <SimpleButton disabled={!isValidButton} title='Продолжить' onPress={onSubmit}
                      style={{marginTop: 20}}/>

      </ContainerWithLogo>
    </Container>
  );
};

export default RegisterUserScreen;
