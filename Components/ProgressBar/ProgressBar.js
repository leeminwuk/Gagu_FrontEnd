import React, { useState, useEffect } from 'react';
import { View, Animated } from 'react-native';
import styles from './Styles';

const ProgressBar = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(progress, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const width = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'], 
  });

  return (
    <View style={styles.fixedBar}>
      <Animated.View
        style={[
          styles.loadingBar,
          {
            width,
            alignSelf: 'flex-start',
          },
        ]}
      />
    </View>
  );
};

export default ProgressBar;