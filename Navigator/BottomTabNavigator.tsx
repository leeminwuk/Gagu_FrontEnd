import React, { useEffect, useRef } from 'react';
import { SafeAreaView, Text, ImageSourcePropType, BackHandler, ToastAndroid } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import ProduceScreen from '../Screens/ProduceScreen/ProduceScreen';
import StorageScreen from '../Screens/StorageScreen/StorageScreen';
import ProgressScreen from '../Screens/ProgressScreen/ProgressScreen';
import MyPageScreen from '../Screens/MyPageScreen/MyPageScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// AnimatedIcon 컴포넌트: 아이콘에 바운스 애니메이션을 적용
interface AnimatedIconProps {
  source: ImageSourcePropType;
  focused: boolean;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ source, focused }) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  //withSpring을 사용하여 들어갔다 나오는 모습
  //차래대로 줄어들었다 커졌다 다시 원래 크기로 복구
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

// Fade-In/Out Wrapper Component 화면 전환 시 페이드 인/아웃 애니메이션을 적용
const FadeView = ({ children }: { children: React.ReactNode }) => {
  const opacity = useSharedValue(0.9); // 초기 투명도 값
  const isFocused = useIsFocused(); // 현재 화면이 포커스되었는지 확인

  React.useEffect(() => {
    if (isFocused) {
      // 화면이 포커스될 때 애니메이션 실행
      opacity.value = withTiming(1, { duration: 1000 });
    } else {
      // 화면이 포커스를 잃을 때 투명도 초기화
      opacity.value = 0.9;
    }
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return <Animated.View style={[{ flex: 1 }, animatedStyle]}>{children}</Animated.View>;
};

// 각 화면을 FadeView로 감싸서 페이드 인/아웃 애니메이션을 적용
const ProduceWrapper = () => (
  <FadeView>
    <ProduceScreen />
  </FadeView>
);

const StorageWrapper = () => (
  <FadeView>
    <StorageScreen />
  </FadeView>
);

const ProgressWrapper = () => (
  <FadeView>
    <ProgressScreen />
  </FadeView>
);

const MyPageWrapper = () => (
  <FadeView>
    <MyPageScreen />
  </FadeView>
);

const BottomTabNavigator: React.FC = () => {
  const backPressCount = useRef(0);

  useEffect(() => {
    const backAction = () => {
      if (backPressCount.current === 0) {
        backPressCount.current += 1;
        ToastAndroid.show('버튼을 한번 더 누르면 종료됩니다', ToastAndroid.SHORT);
        setTimeout(() => {
          backPressCount.current = 0;
        }, 2000);
        return true;
      } else if (backPressCount.current === 1) {
        BackHandler.exitApp();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

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
        <Tab.Screen name="가구제작" component={ProduceWrapper} />
        <Tab.Screen name="저장된 가구" component={StorageWrapper} />
        <Tab.Screen name="진행상황" component={ProgressWrapper} />
        <Tab.Screen name="마이페이지" component={MyPageWrapper} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default BottomTabNavigator;