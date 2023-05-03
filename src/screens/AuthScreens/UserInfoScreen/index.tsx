import React, { useEffect, useMemo } from 'react';
import { Container } from '../../../styles/global';
import NavigationHeader from '../../../components/NavigationHeader';
import { ScreenWithProps } from '../../../navigation/ScreenParams';
import { Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { user } from '../../../redux/userSlice/userSlice';
import { useSelector } from 'react-redux';
import { selectToken } from '../../../redux/auth/selectors';
import { selectError } from '../../../redux/errorSlice/selectors';
import styled from 'styled-components/native';
import { selectUserInfo } from '../../../redux/userSlice/selectors';
import { authenticationSlice } from '../../../redux/auth/slice';

const UserInfoScreen: ScreenWithProps<'UserScreen'> = ({ navigation, route }) => {
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);
  const errorMessage = useSelector(selectError);
  const userInfo = useSelector(selectUserInfo);

  const onClick = () => {
    dispatch(user.fetchUserInfo({ accessToken: token }));
  };

  const onClickCheck = () => {
    dispatch(user.fetchUserInfo({ accessToken: '' }));
  };

  const onLogout = () => {
    dispatch(authenticationSlice.logout());
  };

  const isConfirmed = (isConfirmed: boolean | undefined) => {
    if (isConfirmed === undefined) {
      return '';
    }
    return isConfirmed ? 'Подвержден' : 'Не подтвержден';
  };

  return (
    <Container>
      <NavigationHeader title="Юзер" navigation={navigation} />
      <Button onPress={onClick}>
        <Text>Получить данные</Text>
      </Button>
      <Button onPress={onClickCheck}>
        <Text>Кнопка для поверки</Text>
      </Button>
      <Button onPress={onLogout}>
        <Text>Выход</Text>
      </Button>
      <UserContainer>
        {errorMessage ? (
          <Text>Ошибка - {errorMessage}</Text>
        ) : (
          <>
            <Text>Роли: {userInfo?.roles.map(item => `${item} `)}</Text>
            <Text>Email: {isConfirmed(userInfo?.emailIsConfirmed)}</Text>
            <Text>Номер телефона: {userInfo?.phone}</Text>
            <Text>Подвержден номер: {isConfirmed(userInfo?.phoneIsConfirmed)}</Text>
          </>
        )}
      </UserContainer>
    </Container>
  );
};

export default UserInfoScreen;

const Button = styled.TouchableOpacity`
  align-self: center;
  padding: 10px;
  border-radius: 12px;
  background-color: #fff;
  margin-bottom: 20px;
`;

const UserContainer = styled.View`
  background-color: #fff;
  padding: 15px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`;
