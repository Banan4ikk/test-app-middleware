import { isFunction } from 'lodash';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { StyleSheet, TextInputProps } from 'react-native';
import { ErrorContainer, ErrorText } from './TextInputForEdit/styles';
import { alabasterWhite, frenchGray, greenSuccess, mainBackgroundColor, mainColor, redError } from '../styles/colors';
import CheckMarkIcon from '../../svg/CkeckMarkIcon';
import MaskInput, { MaskInputProps } from 'react-native-mask-input';
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select';
import ArrowDown from '../../svg/ArrowDown';

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
    borderRadius: 8,
  },
});

const DropDownInput: FC<PickerSelectProps> = ({ onValueChange, items, placeholder, value, ...other }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const onFocusHandler = useCallback(() => {
    setIsFocused(true);
  }, []);

  const onBlurHandler = useCallback(() => {
    setIsFocused(false);
  }, []);

  const selectBorderColor = () => {
    if (isFocused) {
      return mainBackgroundColor;
    }
    if (hasValue) {
      return greenSuccess;
    }
    return frenchGray;
  };

  useEffect(() => {
    if (placeholder?.value === value) {
      setHasValue(false);
    } else {
      setHasValue(true);
    }
  }, [placeholder, value]);

  return (
    <ErrorContainer>
      <RNPickerSelect
        items={items}
        style={{
          viewContainer: {
            width: '100%',
          },
          placeholder: {
            fontFamily: 'Manrope-Regular',
            color: '#000',
          },
          inputIOSContainer: {
            width: '100%',
            paddingVertical: 14,
            paddingLeft: 10,
            paddingRight: 16,
            borderStyle: 'solid',
            borderWidth: 1,
            borderRadius: 8,
            borderColor: selectBorderColor(),
            backgroundColor: !isFocused ? alabasterWhite : mainColor,
          },
          inputAndroidContainer: {
            width: '100%',
            paddingVertical: 14,
            paddingLeft: 10,
            paddingRight: 16,
            borderStyle: 'solid',
            borderWidth: 1,
            borderRadius: 8,
            borderColor: selectBorderColor(),
            backgroundColor: !isFocused ? alabasterWhite : mainColor,
          },
        }}
        onValueChange={onValueChange}
        placeholder={placeholder}
        onOpen={onFocusHandler}
        onClose={onBlurHandler}
        {...other}
      />
      {hasValue && !isFocused && <CheckMarkIcon style={styles.iconStyles} />}
      {(isFocused || !hasValue) && (
        <ArrowDown style={[styles.iconStyles, { transform: [{ rotate: isFocused ? '180deg' : '0deg' }] }]} />
      )}
    </ErrorContainer>
  );
};

export default DropDownInput;
