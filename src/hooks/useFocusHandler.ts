import { useCallback, useState } from 'react';
import { TextInputProps } from 'react-native';
import { isFunction } from 'lodash';
import { frenchGray, greenSuccess, mainBackgroundColor, redError } from '../styles/colors';
import { StatusType } from '../components/TextInputForEdit';

type Props = {
  onFocus: TextInputProps['onFocus'];
  onBlur: TextInputProps['onBlur'];
};

export const useFocusHandler = ({ onFocus, onBlur }: Props) => {
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

  const selectBorderColor = (status: StatusType) => {
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

  return {
    isFocused,
    onBlurHandler,
    onFocusHandler,
    selectBorderColor,
  };
};
