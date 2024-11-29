import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { FixedBar, LoadingBar } from './Styles';

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
    <FixedBar>
      <Animated.View
        style={{
          width,
          height: '100%',
          backgroundColor: '#cadfff',
          borderRadius: 10,
          alignSelf: 'flex-start',
        }}
      />
    </FixedBar>
  );
};

export default ProgressBar;