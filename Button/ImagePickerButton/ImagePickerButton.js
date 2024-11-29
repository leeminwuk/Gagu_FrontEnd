import React from 'react';
import { TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import {
  WorkshopImageContainer,
  CameraImage,
  ProfileImage,
} from './Styles';

const ImagePickerButton = ({ setProfileUrl, profileUrl }) => {
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
      <WorkshopImageContainer>
        {profileUrl ? (
          <ProfileImage source={profileUrl} />
        ) : (
          <CameraImage
            source={require('../../assets/images/camera.png')}
          />
        )}
      </WorkshopImageContainer>
    </TouchableOpacity>
  );
};

export default ImagePickerButton;