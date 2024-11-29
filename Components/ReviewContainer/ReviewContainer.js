import React, { useState } from 'react';
import { TouchableOpacity, Modal } from 'react-native';
import {
  ReviewContainer,
  ReviewTitleContainer,
  ProfileContainer,
  ProfileImage,
  ProfileText,
  ReviewRatingContainer,
  ReviewStarContainer,
  ReviewStarImage,
  ReviewDateContainer,
  ReviewDateText,
  ReviewDetailContainer,
  ReviewCommentContainer,
  CommentText,
  ReviewImageContainer,
  ReviewImage,
  ModalContainer,
  ModalImage,
  ModalComment,
  CloseButton,
  CloseButtonText,
} from './Styles';

const ReviewComponent = ({ writer, date, description, stars, img1, img2, img3 }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedComment, setSelectedComment] = useState('');

  const handleImagePress = (image, comment) => {
    setSelectedImage({ uri: image });
    setSelectedComment(comment);
    setModalVisible(true);
  };

  return (
    <ReviewContainer>
      <ReviewTitleContainer>
        <ProfileContainer>
          <ProfileImage
            source={require('../../assets/images/profile.png')}
          />
          <ProfileText>{writer}</ProfileText>
        </ProfileContainer>
        <ReviewRatingContainer>
          <ReviewStarContainer>
            {[...Array(stars)].map((_, index) => (
              <ReviewStarImage
                key={index}
                source={require('../../assets/images/filedstar.png')}
              />
            ))}
          </ReviewStarContainer>
          <ReviewDateContainer>
            <ReviewDateText>{date}</ReviewDateText>
          </ReviewDateContainer>
        </ReviewRatingContainer>
      </ReviewTitleContainer>
      <ReviewDetailContainer>
        <ReviewCommentContainer>
          <CommentText>
            {description}
          </CommentText>
        </ReviewCommentContainer>
        <ReviewImageContainer>
          {[img1, img2, img3].map((img, index) => (
            img ? (
              <TouchableOpacity
                activeOpacity={0.8}
                key={index}
                onPress={() => handleImagePress(img, description)}
              >
                <ReviewImage
                  source={{ uri: img }}
                />
              </TouchableOpacity>
            ) : null
          ))}
        </ReviewImageContainer>
      </ReviewDetailContainer>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="none"
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalContainer>
          <ModalImage source={selectedImage} />
          <ModalComment>{selectedComment}</ModalComment>
          <CloseButton
            onPress={() => setModalVisible(false)}
            activeOpacity={0.8}
          >
            <CloseButtonText>닫기</CloseButtonText>
          </CloseButton>
        </ModalContainer>
      </Modal>
    </ReviewContainer>
  );
};

export default ReviewComponent;