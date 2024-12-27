import React from 'react';
import {
  WorkShopContainer,
  ImageContainer,
  StyledImage,
  Container,
  TitleContainer,
  TitleTextContainer,
  TitleText,
  LocationContainer,
  LocationImageContainer,
  LocationImage,
  LocationTextContainer,
  LocationText,
  SubTextContainer,
  SubText,
  ReviewContainer,
  StarImageContainer,
  StarImage,
  ReviewTextContainer,
  ReviewText,
  ExpactedCostContainer,
  ExpactedTextContainer,
  ExpactedText,
  CostContainer,
  CostText,
} from './Styles';

const WorkShop = ({
  workshopId, 
  titleText,
  subText,
  locationText,
  reviewText,
  workshopimage,
  handleButtonPress,
  costText,
  starAverage, 
}) => {
  const handlePress = () => {
    handleButtonPress(workshopId); 
  };

  const validStarAverage = starAverage !== undefined && starAverage !== null ? starAverage : 0;
  const starCount = Math.ceil(validStarAverage);

  return (
    <WorkShopContainer onPress={handlePress} activeOpacity={0.8}>
      <ImageContainer>
        <StyledImage source={workshopimage} />
      </ImageContainer>
      <Container>
        <TitleContainer>
          <TitleTextContainer>
            <TitleText>{titleText}</TitleText>
          </TitleTextContainer>
          <LocationContainer>
            <LocationImageContainer>
              <LocationImage
                source={require('../../assets/images/whitelocation.png')}
              />
            </LocationImageContainer>
            <LocationTextContainer>
              <LocationText>{locationText}</LocationText>
            </LocationTextContainer>
          </LocationContainer>
        </TitleContainer>
        <SubTextContainer>
          <SubText>{subText}</SubText>
        </SubTextContainer>
        <ReviewContainer>
          <StarImageContainer>
            {[...Array(starCount)].map((_, i) => (
              <StarImage
                key={i}
                source={require('../../assets/images/filedstar.png')}
              />
            ))}
          </StarImageContainer>
          <ReviewTextContainer>
            <ReviewText>{reviewText}</ReviewText>
          </ReviewTextContainer>
        </ReviewContainer>
        <ExpactedCostContainer>
        </ExpactedCostContainer>
      </Container>
    </WorkShopContainer>
  );
};

export default WorkShop;