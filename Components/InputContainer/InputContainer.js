import React, { useRef, useEffect } from 'react';
import { View, Text, TextInput, Animated } from 'react-native';
import styles from './Styles';

const InputContainer = ({ title, value, setValue, isEditing, isValid = true }) => {
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!isValid) {
      Animated.sequence([
        Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true }),
      ]).start();
    }
  }, [isValid]);

  const handleChange = text => {
    setValue(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <Animated.View style={[styles.inputContainer, { transform: [{ translateX: shakeAnimation }] }]}>
        <TextInput
          style={[styles.input, isEditing ? styles.editingInput : null, !isValid ? styles.invalidInput : null]}
          value={value}
          onChangeText={handleChange}
          editable={isEditing}
        />
      </Animated.View>
    </View>
  );
};

export default InputContainer;