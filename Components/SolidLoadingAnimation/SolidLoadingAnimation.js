import React from 'react';
import { FixedContainer, ImageContainer, SolidImage } from './Styles';

const SolidAnimation = () => {
  return (
    <FixedContainer>
      <ImageContainer>
        <SolidImage
          source={require('../../assets/images/solid.png')}
        />
      </ImageContainer>
    </FixedContainer>
  );
};

export default SolidAnimation;