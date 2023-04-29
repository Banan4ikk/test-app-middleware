import { isFunction } from 'lodash';
import React, { FC, useCallback, useState } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps } from 'react-native';
import { ErrorContainer, ErrorText, StyledTextInput } from './styles';
import {
  alabasterWhite,
  frenchGray,
  greenSuccess,
  mainBackgroundColor,
  mainColor,
  redError,
} from '../../styles/colors';
import CheckMarkIcon from '../../../svg/CkeckMarkIcon';

export type StatusType = 'primary' | 'danger' | 'success';

const styles = StyleSheet.create({
  iconStyles: {
    position: 'absolute',
    right: 15,
    top: '40%',
  },
});

const TextInputForEdit: FC<TextInputProps & { status: StatusType }> = ({
  onBlur,
  onFocus,
  status = 'primary',
  ...other
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocusHandler: TextInputProps['onFocus'] = useCallback(
    (e: any) => {
      setIsFocused(true);
      if (isFunction(onFocus)) {
        onFocus(e);
      }
    },
    [onFocus],
  );

  const onBlurHandler: TextInputProps['onBlur'] = useCallback(
    (e: any) => {
      setIsFocused(false);
      if (isFunction(onBlur)) {
        onBlur(e);
      }
    },
    [onBlur],
  );

  const selectBorderColor = () => {
    if (isFocused) {
      return mainBackgroundColor;
    }
    if (status === 'danger') {
      return redError;
    }
    if (status === 'success') {
      return greenSuccess;
    }
    return frenchGray;
  };

  return (
    <ErrorContainer>
      <StyledTextInput
        borderColor={selectBorderColor()}
        bgColor={!isFocused && status === 'primary' ? alabasterWhite : mainColor}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        {...other}
      />
      {status === 'danger' && !isFocused && <ErrorText>Заполните поле</ErrorText>}
      {status === 'success' && !isFocused && <CheckMarkIcon style={styles.iconStyles} />}
    </ErrorContainer>
  );
};

export default TextInputForEdit;
