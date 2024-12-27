import React, { useState, useRef, useEffect } from 'react';
import { FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  NoticeContainer,
  SectionContainer,
  ImageContainer,
  NoticeImage,
  TextContainer,
  NoticeMainText,
  NoticeSubText,
  IndicatorContainer,
  Indicator,
} from './Styles';

const Notice = () => {
  const { width } = Dimensions.get('window');
  const data = [
    { key: '1' },
    { key: '2' },
    { key: '3' },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const navigation = useNavigation();
  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const handleNoticePress = () => {
    navigation.navigate('NoticeScreen');
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={handleNoticePress}>
      <SectionContainer style={{ width: width }}>
        <ImageContainer>
          <NoticeImage
            source={require('../../assets/images/speaker.png')}
          />
        </ImageContainer>
        <TextContainer>
          <NoticeMainText>
            가구 서비스 런칭 기념 이벤트!
          </NoticeMainText>
          <NoticeSubText>
            자세한 설명은 공지사항을 참고하세요.
          </NoticeSubText>
        </TextContainer>
      </SectionContainer>
    </TouchableOpacity>
  );

  const handleViewableItemsChanged = useRef(({ viewableItems }) => {
    setActiveIndex(viewableItems[0].index);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % data.length;
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <NoticeContainer>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig.current}
        snapToInterval={width}
        decelerationRate="fast"
        snapToAlignment="start"
      />
      <IndicatorContainer>
        {data.map((_, i) => (
          <Indicator
            key={i}
            style={activeIndex === i && { backgroundColor: '#ffffff' }}
          />
        ))}
      </IndicatorContainer>
    </NoticeContainer>
  );
};

export default Notice;