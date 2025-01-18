import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {
  SelectDistancesContainer,
  ListContainer,
  SelectDistancesText,
  SlideImage,
} from './Styles';

interface SelectConditionProps {
  onConditionChange: (condition: string) => void;
}

const conditions: string[] = ['거리순', '리뷰순'];

const SelectCondition: React.FC<SelectConditionProps> = ({ onConditionChange }) => {
  const [selectedCondition, setSelectedCondition] = useState<string>(conditions[0]);
  const [isListVisible, setIsListVisible] = useState<boolean>(false);

  const handleSelectCondition = (condition: string) => {
    setSelectedCondition(condition);
    setIsListVisible(false);
    onConditionChange(condition);
  };

  return (
    <SelectDistancesContainer onPress={() => setIsListVisible(!isListVisible)} activeOpacity={1}>
      <SelectDistancesText>{selectedCondition}</SelectDistancesText>
      {isListVisible && (
        <ListContainer>
          <FlatList
            data={conditions}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <SelectDistancesText onPress={() => handleSelectCondition(item)}>
                {item}
              </SelectDistancesText>
            )}
          />
        </ListContainer>
      )}
      <SlideImage source={require('../../assets/images/slidebutton.png')} />
    </SelectDistancesContainer>
  );
};

export default SelectCondition;