import React, { forwardRef, useRef } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { ErrorContainer, ErrorText, StyledTextInput } from './styles';
import { alabasterWhite, mainColor } from '../../styles/colors';
import CheckMarkIcon from '../../../svg/CkeckMarkIcon';
import { useFocusHandler } from '../../hooks/useFocusHandler';
import mergeRefs from 'react-merge-refs';

export type StatusType = 'primary' | 'danger' | 'success';

type Props = TextInputProps & {
  status: StatusType;
};

const styles = StyleSheet.create({
  iconStyles: {
    position: 'absolute',
    right: 15,
    top: '40%',
  },
});

const TextInputForEdit = forwardRef<TextInput, Props>(
  ({ onBlur, onFocus, status = 'primary', ...other }, forwardRef) => {
    const { isFocused, selectBorderColor, onFocusHandler, onBlurHandler } = useFocusHandler({ onFocus, onBlur });

    const localRef = useRef<TextInput>(null);

    return (
      <ErrorContainer>
        <StyledTextInput
          borderColor={selectBorderColor(status)}
          bgColor={!isFocused && status === 'primary' ? alabasterWhite : mainColor}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          ref={mergeRefs([localRef, forwardRef])}
          {...other}
        />
        {status === 'danger' && !isFocused && <ErrorText>Заполните поле</ErrorText>}
        {status === 'success' && !isFocused && <CheckMarkIcon style={styles.iconStyles} />}
      </ErrorContainer>
    );
  },
);

export default TextInputForEdit;
