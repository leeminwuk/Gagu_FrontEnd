import React from 'react';
import { SafeAreaView, Text, ImageSourcePropType } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ProduceScreen from '../Screens/ProduceScreen/ProduceScreen';
import StorageScreen from '../Screens/StorageScreen/StorageScreen';
import ProgressScreen from '../Screens/ProgressScreen/ProgressScreen';
import MyPageScreen from '../Screens/MyPageScreen/MyPageScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProduceStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name="ProduceScreen" component={ProduceScreen} />
  </Stack.Navigator>
);

const StorageStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name="StorageScreen" component={StorageScreen} />
  </Stack.Navigator>
);

const ProgressStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name="ProgressScreen" component={ProgressScreen} />
  </Stack.Navigator>
);

const MyPageStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name="MyPageScreen" component={MyPageScreen} />
  </Stack.Navigator>
);

interface AnimatedIconProps {
  source: ImageSourcePropType;
  focused: boolean;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ source, focused }) => {
  const scale = useSharedValue(1); // Initial scale value

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.8, { damping: 10, stiffness: 150 }, () => {
      scale.value = withSpring(1.2, { damping: 10, stiffness: 150 }, () => {
        scale.value = withSpring(1, { damping: 10, stiffness: 150 });
      });
    });
  };

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn}>
      <Animated.Image source={source} style={[{ width: 20, height: 20 }, animatedStyle]} />
    </TouchableWithoutFeedback>
  );
};


const BottomTabNavigator: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#191919' }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === '가구제작') {
              iconName = focused
                ? require('../assets/images/produceicon.png')
                : require('../assets/images/unproduceicon.png');
            } else if (route.name === '저장된 가구') {
              iconName = focused
                ? require('../assets/images/storageicon.png')
                : require('../assets/images/unstorageicon.png');
            } else if (route.name === '진행상황') {
              iconName = focused
                ? require('../assets/images/progressicon.png')
                : require('../assets/images/unprogressicon.png');
            } else if (route.name === '마이페이지') {
              iconName = focused
                ? require('../assets/images/mypageicon.png')
                : require('../assets/images/unmypageicon.png');
            }

            return <AnimatedIcon source={iconName} focused={focused} />;
          },
          tabBarLabel: ({ focused }) => {
            let labelColor = focused ? '#ffffff' : '#696969';
            return <Text style={{ color: labelColor }}>{route.name}</Text>;
          },
          tabBarStyle: {
            backgroundColor: '#191919',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 6,
          },
        })}
      >
        <Tab.Screen name="가구제작" component={ProduceStack} />
        <Tab.Screen name="저장된 가구" component={StorageStack} />
        <Tab.Screen name="진행상황" component={ProgressStack} />
        <Tab.Screen name="마이페이지" component={MyPageStack} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default BottomTabNavigator;