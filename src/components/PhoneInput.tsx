import { isFunction } from 'lodash';
import React, { FC, useCallback, useState } from 'react';
import { StyleSheet, TextInputProps } from 'react-native';
import { ErrorContainer, ErrorText } from './TextInputForEdit/styles';
import { alabasterWhite, frenchGray, greenSuccess, mainBackgroundColor, mainColor, redError } from '../styles/colors';
import CheckMarkIcon from '../../svg/CkeckMarkIcon';
import MaskInput, { MaskInputProps } from 'react-native-mask-input';
import { useFocusHandler } from '../hooks/useFocusHandler';

export type StatusType = 'primary' | 'danger' | 'success';

const styles = StyleSheet.create({
  iconStyles: {
    position: 'absolute',
    right: 15,
    top: '40%',
  },
  inputStyles: {
    width: '100%',
    paddingVertical: 14,
    paddingLeft: 10,
    paddingRight: 16,
    borderStyle: 'solid',
    borderWidth: 1,
  },
});

const PhoneInput: FC<MaskInputProps & { status: StatusType }> = ({
  onBlur,
  onFocus,
  status = 'primary',
  onChangeText,
  mask,
  ...other
}) => {
  const { isFocused, selectBorderColor, onFocusHandler, onBlurHandler } = useFocusHandler({ onFocus, onBlur });

  return (
    <ErrorContainer>
      <MaskInput
        style={[
          styles.inputStyles,
          {
            borderColor: selectBorderColor(status),
            backgroundColor: !isFocused && status === 'primary' ? alabasterWhite : mainColor,
          },
        ]}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onChangeText={(masked, unmasked, obfuscated) =>
          onChangeText ? onChangeText(masked, unmasked, obfuscated) : null
        }
        mask={mask}
        {...other}
      />
      {status === 'danger' && !isFocused && <ErrorText>Заполните поле</ErrorText>}
      {status === 'success' && !isFocused && <CheckMarkIcon style={styles.iconStyles} />}
    </ErrorContainer>
  );
};

export default PhoneInput;
