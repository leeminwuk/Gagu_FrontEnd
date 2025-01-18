import React, { useState, useEffect } from 'react';
import {
  NearLocationContainer,
  LocationImageContainer,
  LocationImage,
  LocationTextContainer,
  NearLocationText,
} from './Styles.ts';
import { fetchAddress } from './events';

const NearLocation: React.FC = () => {
  const [nearLocationText, setNearLocationText] = useState<string>('주소 조회 중...');

  useEffect(() => {
    fetchAddress(setNearLocationText);
  }, []);

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