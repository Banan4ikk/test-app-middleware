import React, { useState } from 'react';
import { ScreenWithProps } from '../../../navigation/ScreenParams';
import NavigationHeader from '../../../components/NavigationHeader';
import { Container } from '../../../styles/global';
import ContainerWithLogo from '../../../components/ContainerWithLogo';
import { BlueText, CellStyled, CellText, CodeContainer, StyledContainer, TitleText } from './styles';
import { CodeField } from 'react-native-confirmation-code-field';
import SimpleButton from '../../../components/buttons/SimpleButton';

const RegistrationCodeScreen: ScreenWithProps<'RegistrationCodeScreen'> = ({ navigation, route }) => {
  const [value, setValue] = useState('');

  const emptyFunction = () => {};

  return (
    <StyledContainer>
      <NavigationHeader navigation={navigation} allowGoBack withCrossIcon title="Регистрация в кабинете врача" />
      <ContainerWithLogo>
        <TitleText>Введите код авторизации</TitleText>
        <CodeContainer>
          <CodeField
            value={value}
            onChangeText={setValue}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            cellCount={6}
            renderCell={({ index, symbol, isFocused }) => (
              <CellStyled key={index} focused={isFocused}>
                <CellText>{symbol}</CellText>
              </CellStyled>
            )}
          />
        </CodeContainer>
        <BlueText>Запросить код авторизации</BlueText>
        <SimpleButton title="Продолжить" onPress={emptyFunction} style={{ marginTop: 16 }} />
      </ContainerWithLogo>
    </StyledContainer>
  );
};

export default RegistrationCodeScreen;
