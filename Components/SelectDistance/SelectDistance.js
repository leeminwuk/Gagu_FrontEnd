import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from './Styles';

const SelectDistance = () => {
  const distances = ['3km 이내', '5km 이내', '10km 이내'];

  const [selectDistancesText, setSelectDistancesText] = useState(distances[0]);
  const [isListVisible, setIsListVisible] = useState(false);

  const handleSelectDistance = distance => {
    setSelectDistancesText(distance);
    setIsListVisible(false);
  };

  return (
    <TouchableOpacity onPress={() => setIsListVisible(!isListVisible)} activeOpacity={1} >
      <View style={styles.selectDistancesContainer}>
        <Text style={styles.selectDistancesText}>{selectDistancesText}</Text>
        {isListVisible && (
          <View style={styles.listContainer}>
            <FlatList
              data={distances}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => handleSelectDistance(item)}>
                  <Text style={styles.selectDistancesText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
        <Image
          source={require('../../assets/images/slidebutton.png')}
          style={styles.slideImage}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SelectDistance;
