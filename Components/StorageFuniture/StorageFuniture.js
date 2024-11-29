import React from 'react';
import {
  StorageImageContainer,
  ImageContainer,
  StyledImage,
  MiniTextContainer,
  FurnitureText,
  DateTextContainer,
  DateText,
} from './Styles';

const StorageFuniture = ({ imageSource, furnitureText, date, onPress }) => {
  return (
    <StorageImageContainer onPress={onPress} activeOpacity={0.9}>
      <ImageContainer>
        <StyledImage source={imageSource} />
      </ImageContainer>
      <MiniTextContainer>
        <FurnitureText>{furnitureText}</FurnitureText>
      </MiniTextContainer>
      <DateTextContainer>
        <DateText>{date}</DateText>
      </DateTextContainer>
    </StorageImageContainer>
  );
};

export default StorageFuniture;