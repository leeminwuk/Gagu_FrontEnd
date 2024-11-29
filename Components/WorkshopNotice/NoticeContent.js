import React from 'react';
import {
  NoticeContainer,
  ImageContainer,
  NoticeImage,
  TextContainer,
  NoticeMainText,
  NoticeSubText,
} from './Styles';

const NoticeContent = ({ imageSource, mainText, subText }) => {
  return (
    <NoticeContainer>
      <ImageContainer>
        <NoticeImage source={imageSource} />
      </ImageContainer>
      <TextContainer>
        <NoticeMainText>{mainText}</NoticeMainText>
        <NoticeSubText>{subText}</NoticeSubText>
      </TextContainer>
    </NoticeContainer>
  );
};

export default NoticeContent;