import React, {useState, useRef, useEffect} from 'react';
import {View, Image, Text, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';

const Notice = () => {
  const {width} = Dimensions.get('window');
  const data = [
    {key: '1'},
    {key: '2'},
    {key: '3'},
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const navigation = useNavigation();
  const viewabilityConfig = useRef({viewAreaCoveragePercentThreshold: 50});
  const handleNoticePress = () => {
    navigation.navigate('NoticeScreen');
  }
  const renderItem = ({item, index}) => (
    <TouchableOpacity activeOpacity={0.8} onPress={handleNoticePress}>
      <View style={[styles.sectionContainer, {width: width}]}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/speaker.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.noticeMainText}>
            가구 서비스 런칭 기념 이벤트!
          </Text>
          <Text style={styles.noticeSubText}>
            자세한 설명은 공지사항을 참고하세요.
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleViewableItemsChanged = useRef(({viewableItems}) => {
    setActiveIndex(viewableItems[0].index);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % data.length;
        flatListRef.current.scrollToIndex({index: nextIndex, animated: true});
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.noticeContainer}>
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
      <View style={styles.indicatorContainer}>
        {data.map((_, i) => (
          <View
            key={i}
            style={[
              styles.indicator,
              activeIndex === i && {backgroundColor: '#ffffff'},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Notice;