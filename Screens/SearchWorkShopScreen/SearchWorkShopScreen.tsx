import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import BackButton from '../../Components/BackButton/BackButton';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import NearLocation from '../../Components/NearLocation/NearLocaion';
import SelectCondition from '../../Components/SelectCondition/SelectCondition';
import WorkShop from '../../Components/WorkShop/WorkShop';
import {
  Container,
  MainText,
  SideTextContainer,
  SideText,
  LocationContainer,
  WorkshopWrapper,
} from './Styles';
import { WorkshopType, SearchWorkShopScreenProps } from './types';
import { handleConditionChange, handleButtonPress, fetchWorkshops } from './events';

const SearchWorkShopScreen: React.FC<SearchWorkShopScreenProps> = (props) => {
  const [workshops, setWorkshops] = useState<WorkshopType[]>([]);
  const [filterType, setFilterType] = useState<string>('POPULAR');
  const navigation = useNavigation<NavigationProp<any>>();
  const { item } = props.route.params;

  useEffect(() => {
    console.log('item', item);
    fetchWorkshops(filterType, setWorkshops, navigation);
  }, [filterType]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <BackButton navigation={navigation} steps={2} titleText={''} image={0} onHamburgerPress={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <Container>
        <MainText>근처 공방 찾기</MainText>
        <SideTextContainer>
          <SideText>
            원하는 공방을 선택하여 가구제작을 완성해보세요.
          </SideText>
        </SideTextContainer>
        <LocationContainer>
          <NearLocation />
          <SelectCondition onConditionChange={(condition) => handleConditionChange(condition, setFilterType)} />
        </LocationContainer>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          {workshops.map((workshop, index) => (
            <WorkshopWrapper key={index}>
              <WorkShop
                workshopId={workshop.id}
                workshopimage={require('../../assets/images/workshop.png')}
                titleText={workshop.workshopName}
                subText={workshop.description.length > 50 ? workshop.description.substring(0, 50) + '...' : workshop.description}
                locationText={workshop.address}
                starAverage={workshop.starAverage}
                reviewText={`리뷰 ${workshop.count}건`}
                handleButtonPress={() => handleButtonPress(workshop.id, navigation, item)} costText={undefined}              />
            </WorkshopWrapper>
          ))}
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
};

export default SearchWorkShopScreen;