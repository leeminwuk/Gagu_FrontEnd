import React from 'react';
import {SafeAreaView, Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProduceScreen from '../Screens/ProduceScreen/ProduceScreen';
import StorageScreen from '../Screens/StorageScreen/StorageScreen';
import ProgressScreen from '../Screens/ProgressScreen/ProgressScreen';
import MyPageScreen from '../Screens/MyPageScreen/MyPageScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#191919"}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused}) => {
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

            return <Image source={iconName} style={{width: 20, height: 20}} />;
          },
          tabBarLabel: ({focused}) => {
            let labelColor = focused ? '#ffffff' : '#696969';
            return <Text style={{color: labelColor}}>{route.name}</Text>;
          },
          tabBarStyle: {
            backgroundColor: '#191919',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 6,
          },
        })}>
        <Tab.Screen name="가구제작" component={ProduceScreen} />
        <Tab.Screen name="저장된 가구" component={StorageScreen} />
        <Tab.Screen name="진행상황" component={ProgressScreen} />
        <Tab.Screen name="마이페이지" component={MyPageScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default BottomTabNavigator;