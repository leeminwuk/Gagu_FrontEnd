import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import styles from './Styles';

const ReviewContainer = ({ writer, date, description, stars, img1, img2, img3 }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedComment, setSelectedComment] = useState('');

  const handleImagePress = (image, comment) => {
    setSelectedImage({ uri: image });
    setSelectedComment(comment);
    setModalVisible(true);
  };

  return (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewTitleContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <Text style={styles.profileText}>{writer}</Text>
        </View>
        <View style={styles.reviewRatingContainer}>
          <View style={styles.reviewStarContainer}>
            {[...Array(stars)].map((_, index) => (
              <Image
                key={index}
                source={require('../../assets/images/filedstar.png')}
                style={styles.reviewStarImage}
              />
            ))}
          </View>
          <View style={styles.reviewDateContainer}>
            <Text style={styles.reviewDateText}>{date}</Text>
          </View>
        </View>
      </View>
      <View style={styles.reviewDetailContainer}>
        <View style={styles.reviewCommentContainer}>
          <Text style={styles.commentText}>
            {description}
          </Text>
        </View>
        <View style={styles.reviewImageContainer}>
          {[img1, img2, img3].map((img, index) => (
            img ? (
              <TouchableOpacity
                activeOpacity={0.8}
                key={index}
                onPress={() => handleImagePress(img, description)}
              >
                <Image
                  source={{ uri: img }}
                  style={styles.reviewImage}
                />
              </TouchableOpacity>
            ) : null
          ))}
        </View>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="none"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Image source={selectedImage} style={styles.modalImage} />
          <Text style={styles.modalComment}>{selectedComment}</Text>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            activeOpacity={0.8}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>닫기</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ReviewContainer;