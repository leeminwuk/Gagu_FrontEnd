import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import {
  PhotoSelectBox,
  SelectedImage,
  CameraImage,
} from './Styles';

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
      <PhotoSelectBox>
        {profileUrl ? (
          <SelectedImage source={profileUrl} />
        ) : (
          <CameraImage
            source={require('../../assets/images/camera.png')}
          />
        )}
      </PhotoSelectBox>
    </TouchableOpacity>
  );
};

export default SmallImagePickerButton;