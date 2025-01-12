import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 16px;
  height: ${height * 0.25}px;
  width: ${width * 0.57}px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 6px;
`;

const Title = styled.View`
  flex: 0.2;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const Icon = styled.Image`
  flex: 0.4;
  justify-content: center;
  align-items: center;
  resize-mode: contain;
`;

const TitleText = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #000000;
  justify-content: center;
`;

const EstimateContainer = styled.View`
  flex: 0.8;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  flex-direction: row;
`;

const EstimateImage = styled.Image`
  width: ${width * 0.2}px;
  height: ${height * 0.1}px;
  resize-mode: contain;
  border-radius: 10px;
`;

const EstimateText = styled.View`
  justify-content: center;
`;

const EstimateName = styled.Text`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const EstimateDate = styled.Text`
  color: #575757;
  font-family: Pretendard;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const EstimateButton = styled.TouchableOpacity`
  flex: 0.35;
  margin-top: 12px;
  background-color: #f2f2f2;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #000;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 180% */
  letter-spacing: -0.5px;
`;

interface EstimateContentProps {
  image: string;
  name: string;
  date: string;
  isWorkshop: boolean;
  navigation: any;
}

const EstimateContent: React.FC<EstimateContentProps> = ({
  image,
  name,
  date,
  isWorkshop,
  navigation,
}) => {
  const formatDate = (dateString: string) => {
    const dateParts = dateString.split(' ')[0].split('-');
    if (dateParts.length !== 3) {
      return '2000년 01월 01일';
    }
    const [year, month, day] = dateParts;
    return `${year}년 ${month}월 ${day}일`;
  };

  const handleSaveEstimatePress = () => {
    navigation.navigate('SendEstimateScreen');
  };

  return (
    <Container>
      <Title>
        <Icon source={require('../../assets/images/blackLogo.png')} />
        <TitleText>제작 요청을 했어요!</TitleText>
      </Title>
      <EstimateContainer>
        <EstimateImage source={{ uri: image }} />
        <EstimateText>
          <EstimateName>{name}</EstimateName>
          <EstimateDate>{formatDate(date)}</EstimateDate>
        </EstimateText>
      </EstimateContainer>
      {isWorkshop && (
        <EstimateButton activeOpacity={0.8} onPress={handleSaveEstimatePress}>
          <ButtonText>견적서 저장하기</ButtonText>
        </EstimateButton>
      )}
    </Container>
  );
};

export default EstimateContent;