import React from 'react';
import {
  TitleContainer,
  MainTextBox,
  TitleTextStyled,
  SideTextBox,
  SideTextStyled,
} from './Styles';

const TitleText = ({ mainText, sideText }) => {
  return (
    <TitleContainer>
      <MainTextBox>
        <TitleTextStyled>{mainText}</TitleTextStyled>
      </MainTextBox>
      <SideTextBox>
        <SideTextStyled>{sideText}</SideTextStyled>
      </SideTextBox>
    </TitleContainer>
  );
};

export default TitleText;