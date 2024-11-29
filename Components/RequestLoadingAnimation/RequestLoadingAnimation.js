import React from 'react';
import { FixedContainer, ImageContainer, CarImage } from './Styles';

const RequestLoading = () => {
  return (
    <FixedContainer>
      <ImageContainer>
        <CarImage
          source={require('../../assets/images/toycar.png')}
        />
      </ImageContainer>
    </FixedContainer>
  );
};

export default RequestLoading;