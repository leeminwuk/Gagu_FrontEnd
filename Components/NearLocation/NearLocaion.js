import React, { useState } from 'react';
import {
  NearLocationContainer,
  LocationImageContainer,
  LocationImage,
  LocationTextContainer,
  NearLocationText,
} from './Styles';

const NearLocation = () => {
  const locations = [
    '서울특별시 송파구',
    '서울특별시 강남구',
    '서울특별시 중구',
  ];

  const [nearLocationText, setNearLocationText] = useState(locations[0]);

  return (
    <NearLocationContainer>
      <LocationImageContainer>
        <LocationImage
          source={require('../../assets/images/location.png')}
        />
      </LocationImageContainer>
      <LocationTextContainer>
        <NearLocationText>{nearLocationText}</NearLocationText>
      </LocationTextContainer>
    </NearLocationContainer>
  );
};

export default NearLocation;