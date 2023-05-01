import React from 'react';
import { Container } from '../../../styles/global';
import NavigationHeader from '../../../components/NavigationHeader';
import { ScreenWithProps } from '../../../navigation/ScreenParams';
import { Button } from 'react-native';
import { useAppDispatch } from '../../../redux/store';

const UserInfoScreen: ScreenWithProps<'UserScreen'> = ({ navigation, route }) => {
  const dispatch = useAppDispatch();

  const onClick = () => {};

  return (
    <Container>
      <NavigationHeader title="Юзер" navigation={navigation} />
      <Button title="click" />
    </Container>
  );
};

export default UserInfoScreen;
