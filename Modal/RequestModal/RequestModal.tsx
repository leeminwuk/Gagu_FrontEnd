import React from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { BlurContainer, FurnitureImage, FurnitureTouch, ModalContainer } from './Styles';

interface RequestModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  furnitureList: { id: number; furniture2DUrl: string; furnitureName: string; createdDate: string; price: string }[];
  onSelect: (item: { id: number; furniture2DUrl: string; furnitureName: string; createdDate: string; price: string }) => void;
}

const RequestModal: React.FC<RequestModalProps> = ({
  modalVisible,
  setModalVisible,
  furnitureList,
  onSelect,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <BlurView
        style={{ flex: 1 }}
        blurType="dark"
        blurAmount={10}
        reducedTransparencyFallbackColor="rgba(99,99,99,0.08)"
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <BlurContainer>
            <TouchableWithoutFeedback onPress={e => e.stopPropagation()}>
              <ModalContainer>
                <FlatList
                  data={furnitureList}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => (
                    <FurnitureTouch activeOpacity={0.8} onPress={() => { onSelect(item); setModalVisible(false); }}>
                      <FurnitureImage source={{ uri: item.furniture2DUrl }} />
                    </FurnitureTouch>
                  )}
                  numColumns={3}
                  contentContainerStyle={{ alignItems: 'center' }}
                />
              </ModalContainer>
            </TouchableWithoutFeedback>
          </BlurContainer>
        </TouchableWithoutFeedback>
      </BlurView>
    </Modal>
  );
};

export default RequestModal;