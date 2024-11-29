import React from 'react';
import { View } from 'react-native';
import {
  Container,
  ImageContainer,
  Image,
  Text,
} from './Styles';

const MypageButton = ({ image, text, style, imagecontainerStyle, imageStyle, onPress }) => {
  return (
    <Container
      style={style}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <ImageContainer style={imagecontainerStyle}>
        <Image
          source={image}
          style={imageStyle}
        />
      </ImageContainer>
      <View>
        <Text>{text}</Text>
      </View>
    </Container>
  );
};

export default MypageButton;