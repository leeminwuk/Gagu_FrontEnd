import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import RNFS from 'react-native-fs';
import {ArViewerView} from 'react-native-ar-viewer';

const ArViewerStorage = () => {
  const [localModelPath, setLocalModelPath] = useState([]);

  const modelLinks = [
    'https://gagu-bucket.s3.ap-northeast-2.amazonaws.com/3d-rendering1730134572317.glb',
  ];

  useEffect(() => {
    const downloadModels = async (url) => {
      const fileName = url.split('/').pop();
      const localPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;
      const exists = await RNFS.exists(localPath);
      if (!exists) {
        await RNFS.downloadFile({fromUrl: url, toFile: localPath}).promise;
      }
      setLocalModelPath(prevPaths => [...new Set([...prevPaths, localPath])]);
    };

    modelLinks.forEach(link => downloadModels(link));
  }, [modelLinks]);

  return (
    <View style={styles.container}>
      {localModelPath.length > 0 && (
        <ArViewerView
          style={{flex: 1}}
          model={localModelPath[0]}
          lightEstimation
          manageDepth
          allowRotate={true}
          allowScale
          allowTranslate
          disableInstantPlacement
          onStarted={() => console.log('started')}
          onEnded={() => console.log('ended')}
          onModelPlaced={() => console.log('model displayed')}
          onModelRemoved={() => console.log('model not visible anymore')}
          planeOrientation={'horizontal'}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default ArViewerStorage;
