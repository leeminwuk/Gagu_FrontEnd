import React, { useEffect, useState } from 'react';
import RNFS from 'react-native-fs';
import { ArViewerView } from 'react-native-ar-viewer';
import { useRoute } from '@react-navigation/native';
import { Container } from './Styles';

const ArViewer = () => {
  const route = useRoute();
  const { modelUrl } = route.params; // modelUrl을 route.params에서 받아옴
  const [localModelPath, setLocalModelPath] = useState(null);

  useEffect(() => {
    const downloadModel = async (url) => {
      const fileName = url.split('/').pop();
      const localPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;
      const exists = await RNFS.exists(localPath);
      if (!exists) {
        await RNFS.downloadFile({ fromUrl: url, toFile: localPath }).promise;
      }
      setLocalModelPath(localPath);
    };

    if (modelUrl) {
      downloadModel(modelUrl);
    }
  }, [modelUrl]);

  return (
    <Container>
      {localModelPath && (
        <ArViewerView
          style={{ flex: 1 }}
          model={localModelPath}
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
    </Container>
  );
};

export default ArViewer;