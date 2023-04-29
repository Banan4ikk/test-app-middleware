import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScreenWithProps } from '../../../navigation/ScreenParams';
import * as Yup from 'yup';
import { Container } from '../../../styles/global';
import NavigationHeader from '../../../components/NavigationHeader';
import ContainerWithLogo from '../../../components/ContainerWithLogo';
import { Controller, FieldError, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextInputForEdit, { StatusType } from '../../../components/TextInputForEdit';
import { CheckBoxContainer, CheckBoxText, FieldContainer, FieldText } from './styles';
import PhoneInput from '../../../components/PhoneInput';
import DropDownInput from '../../../components/DropDownInput';
import FilePickerInput from '../../../components/FilePickerInput';
import CheckBox from '../../../components/CheckBox/CheckBox';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SimpleButton from '../../../components/buttons/SimpleButton';

type ValueWithKey = {
  key?: string;
  name: string;
  value: string;
};

interface IFormValues {
  name: string;
  lastname: string;
  middleName: string;
  phoneNumber: string;
  email: string;
  city: string;
  document: any;
  specialization: string;
  promo: string;
}

const formSchema = Yup.object().shape({
  name: Yup.string().required(),
  lastname: Yup.string().required(),
  middleName: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  email: Yup.string().required(),
  city: Yup.string().required(),
  document: Yup.string().required(),
  specialization: Yup.string().required(),
  promo: Yup.string().notRequired(),
});
/*eslint-disable*/
const PHONE_INPUT_MASK = ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
const cities = [
  {label: 'Моксва', value: 'MOSCOW'},
  {label: 'Санкт-Петербург', value: 'PETERBURG'},
  {label: 'Новосибирск', value: 'NOVOSIBIRSK'}
]

const specializations = [
  {label: 'Терапевт', value: 'terapevt'},
  {label: 'Хирург', value: 'surgeon'},
  {label: 'Кардиолог', value: 'kardiolog'}
]

const RegisterUserScreen: ScreenWithProps<'RegisterUserScreen'> = ({ navigation, route }) => {

  const insets = useSafeAreaInsets()

  const {
    control,
  } = useForm<IFormValues>({
    defaultValues: {
      city: '',
      document: '',
      email: '',
      lastname: '',
      middleName: '',
      name: '',
      phoneNumber: '',
      specialization: '',
    },
    resolver: yupResolver(formSchema),
    mode: 'all',
    criteriaMode: 'all',
    shouldUnregister: false,
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

  const onSubmit = () => {
    navigation.navigate('RegistrationCodeScreen')
  }

  const [personalDataChecked, setPersonalDataChecked] = useState(false);
  const [promosParticipation, setPromosParticipation] = useState(false);
  const [galleryParticipation, setGalleryParticipation] = useState(false);

  return (
    <Container>
      <NavigationHeader navigation={navigation} allowGoBack withCrossIcon title="Регистрация в кабинете врача" />
      <ContainerWithLogo scrollable>
        <FieldContainer>
          <FieldText>Фамилия</FieldText>
          <Controller
            control={control}
            name="lastname"
            key="lastname"
            render={({ field, fieldState: { isTouched, error } }) => (
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
            render={({ field, fieldState: { isTouched, error } }) => (
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
            render={({ field, fieldState: { isTouched, error } }) => (
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
          <FieldText>Телефон</FieldText>
          <Controller
            control={control}
            name="phoneNumber"
            key="phoneNumber"
            render={({ field, fieldState: { isTouched, error } }) => (
              <PhoneInput
                status={selectCurrentFieldStatus(isTouched, error)}
                onChangeText={field.onChange}
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
        <FieldContainer>
          <FieldText>Email</FieldText>
          <Controller
            control={control}
            name="email"
            key="email"
            render={({ field, fieldState: { isTouched, error } }) => (
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
          <FieldText>Город</FieldText>
          <Controller
            control={control}
            name="city"
            key="city"
            render={({ field }) => (
              <DropDownInput
                onValueChange={field.onChange}
                value={field.value}
                items={cities}
                placeholder={{inputLabel: 'Выберите', value: 'select'}}
                itemKey='city'
              />
            )}
          />
        </FieldContainer>
        <FieldContainer>
          <FieldText>Диплом</FieldText>
          <Controller
            control={control}
            name="city"
            key="city"
            render={() => (
              <FilePickerInput/>
            )}
          />
        </FieldContainer>
        <FieldContainer>
          <FieldText>Специализация</FieldText>
          <Controller
            control={control}
            name="specialization"
            key="specialization"
            render={({ field, fieldState: { isTouched, error } }) => (
              <DropDownInput
                onValueChange={field.onChange}
                value={field.value}
                items={specializations}
                placeholder={{inputLabel: 'Выберите', value: 'select'}}
                itemKey='specialization'
              />
            )}
          />
        </FieldContainer>
        <View style={{paddingVertical: 25}}>
          <CheckBoxContainer>
            <CheckBox active={personalDataChecked} onPress={() => setPersonalDataChecked(!personalDataChecked)} />
            <CheckBoxText>Согласие на обработку персональных данных</CheckBoxText>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <CheckBox active={promosParticipation} onPress={() => setPromosParticipation(!promosParticipation)} />
            <CheckBoxText>{`Согласие на участие в акциях\n`}
              <FieldText>по продвижению приложения</FieldText>
            </CheckBoxText>
          </CheckBoxContainer>
          <CheckBoxContainer style={{marginBottom: 10}}>
            <CheckBox active={galleryParticipation} onPress={() => setGalleryParticipation(!galleryParticipation)} />
            <CheckBoxText>{`Согласие на участие в галерее\n`}
              <FieldText>рекомендованых врачей</FieldText>
            </CheckBoxText>
          </CheckBoxContainer>
        </View>

        <FieldContainer>
          <FieldText>Введите промокод</FieldText>
          <Controller
            control={control}
            name="promo"
            key="promo"
            render={({ field, fieldState: { isTouched, error } }) => (
              <TextInputForEdit
                status={selectCurrentFieldStatus(isTouched, error)}
                onChangeText={field.onChange}
                placeholder="Промокод"
                {...field}
              />
            )}
          />
        </FieldContainer>

        <SimpleButton title='Продолжить' onPress={onSubmit} style={{marginTop: 15, marginBottom: insets.bottom + 10}}/>

      </ContainerWithLogo>
    </Container>
  );
};

export default RegisterUserScreen;
