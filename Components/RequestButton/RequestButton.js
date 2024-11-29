import React from 'react';
import {
  RequestButtonContainer,
  RequestButtonText,
  RequestImage,
} from './Styles';

const RequestButton = ({ onPress, requestText, requestImage }) => {
  return (
    <RequestButtonContainer onPress={onPress} activeOpacity={0.8}>
      <RequestImage source={requestImage} />
      <RequestButtonText>{requestText}</RequestButtonText>
    </RequestButtonContainer>
  );
};

export default RequestButton;