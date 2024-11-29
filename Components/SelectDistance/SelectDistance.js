import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {
  SelectDistancesContainer,
  ListContainer,
  SelectDistancesText,
  SlideImage,
} from './Styles';

const SelectDistance = () => {
  const distances = ['3km 이내', '5km 이내', '10km 이내'];

  const [selectDistancesText, setSelectDistancesText] = useState(distances[0]);
  const [isListVisible, setIsListVisible] = useState(false);

  const handleSelectDistance = distance => {
    setSelectDistancesText(distance);
    setIsListVisible(false);
  };

  return (
    <SelectDistancesContainer onPress={() => setIsListVisible(!isListVisible)} activeOpacity={1}>
      <SelectDistancesText>{selectDistancesText}</SelectDistancesText>
      {isListVisible && (
        <ListContainer>
          <FlatList
            data={distances}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <SelectDistancesText onPress={() => handleSelectDistance(item)}>
                {item}
              </SelectDistancesText>
            )}
          />
        </ListContainer>
      )}
      <SlideImage
        source={require('../../assets/images/slidebutton.png')}
      />
    </SelectDistancesContainer>
  );
};

export default SelectDistance;