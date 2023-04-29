import React, { FC } from 'react';
import { ActiveCheckBox, CheckBoxContainer } from './styles';
import { TouchableOpacity } from 'react-native';
import CheckMarkIcon from '../../../svg/CkeckMarkIcon';

type CheckBoxProps = {
  active: boolean;
  onPress: () => void;
};

const CheckBox: FC<CheckBoxProps> = ({ active, onPress }) => {
  return (
    <TouchableOpacity style={{ padding: 7 }} onPress={onPress}>
      {active ? (
        <ActiveCheckBox>
          <CheckMarkIcon stroke="#fff" />
        </ActiveCheckBox>
      ) : (
        <CheckBoxContainer />
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;
