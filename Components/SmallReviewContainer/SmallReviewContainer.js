import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  ReviewContents,
  ReviewBox,
  ReviewImageContainer,
  ReviewTextContainer,
  ReviewText,
} from './Styles';

const SmallReviewContainer = ({ img1, description = '' }) => {
  console.log('img1:', img1);
  return (
    <ReviewContents>
      <ReviewBox activeOpacity={0.8}>
        <ReviewImageContainer>
          {img1}
        </ReviewImageContainer>
        <ReviewTextContainer>
          <ReviewText>
            {`${description.substring(0, 35)}${description.length > 35 ? '...' : ''}`}
          </ReviewText>
        </ReviewTextContainer>
      </ReviewBox>
    </ReviewContents>
  );
};

export default SmallReviewContainer;