import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { ArViewerView } from 'react-native-ar-viewer';
import { Container } from './Styles';
import { downloadModel } from './events';
import { ArViewerProps, RouteParams } from './types';

const ArViewer: React.FC<ArViewerProps> = () => {
  const route = useRoute();
  const { modelUrl } = route.params as RouteParams; // modelUrl을 route.params에서 받아옴
  const [localModelPath, setLocalModelPath] = useState<string | null>(null);

  useEffect(() => {
    if (modelUrl) {
      downloadModel(modelUrl).then(setLocalModelPath);
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