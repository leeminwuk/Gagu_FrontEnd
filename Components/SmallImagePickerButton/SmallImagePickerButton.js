import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import styles from './Styles';

const SmallImagePickerButton = ({ setProfileUrl, profileUrl }) => {
  const selectImage = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    try {
      const result = await launchImageLibrary(options);
      if (result.didCancel) {
        console.log('User cancelled image picker');
      } else if (result.errorCode) {
        console.log('ImagePicker Error: ', result.errorMessage);
      } else {
        const source = { uri: result.assets[0].uri };
        setProfileUrl(source);
      }
    } catch (error) {
      console.log('Error picking image: ', error);
    }
  };

  return (
    <TouchableOpacity onPress={selectImage} activeOpacity={0.7}>
      <View style={styles.photoSelectBox}>
        {profileUrl ? (
          <Image source={profileUrl} style={styles.selectedImage} />
        ) : (
          <Image
            source={require('../../assets/images/camera.png')}
            style={styles.cameraImage}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SmallImagePickerButton;