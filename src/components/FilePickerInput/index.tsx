import React, { Fragment, useState } from 'react';
import { ErrorContainer, ErrorText } from '../TextInputForEdit/styles';
import { FileContainer, FileView, SelectFileText, ViewContainer } from './styles';
import ClipIcon from '../../../svg/ClipIcon';
import { Pressable, View } from 'react-native';
import CrossIcon from '../../../svg/CrossIcon';
import { mainBackgroundColor } from '../../styles/colors';

const FilePickerInput = () => {
  const [showFile, setShowFile] = useState(false);
  return (
    <ViewContainer>
      <FileContainer onPress={() => setShowFile(true)}>
        <ClipIcon style={{ marginRight: 10 }} />
        <SelectFileText>Прикрепить файл</SelectFileText>
      </FileContainer>
      {showFile && (
        <FileView>
          <SelectFileText style={{ fontSize: 13 }}>Диплом</SelectFileText>
          <CrossIcon
            width={12}
            height={12}
            style={{ transform: [{ translateY: 2 }], marginLeft: 5 }}
            stroke={mainBackgroundColor}
          />
        </FileView>
      )}
    </ViewContainer>
  );
};

export default FilePickerInput;
