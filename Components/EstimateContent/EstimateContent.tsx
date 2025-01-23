import React from 'react';
import { ButtonText, Container, EstimateButton, EstimateContainer, EstimateDate, EstimateImage, EstimateName, EstimateText, Icon, Title, TitleText } from './Styles';

interface EstimateContentProps {
  image: string;
  name: string;
  date: string;
  estimateId: number;
  isWorkshop: boolean;
  navigation: any;
}

const EstimateContent: React.FC<EstimateContentProps> = ({
  image,
  name,
  date,
  estimateId,
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
    navigation.navigate('SendEstimateScreen', { estimateId });
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