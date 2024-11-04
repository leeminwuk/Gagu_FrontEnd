import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '../Screens/StartScreen/StartScreen';
import SignupScreen from '../Screens/SignupScreen/SignupScreen';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import BottomTabNavigator from './BottomTabNavigator';
import ProduceScreen from '../Screens/ProduceScreen/ProduceScreen';
import StorageScreen from '../Screens/StorageScreen/StorageScreen';
import ProgressScreen from '../Screens/ProgressScreen/ProgressScreen';
import MyPageScreen from '../Screens/MyPageScreen/MyPageScreen';
import PromptScreen from '../Screens/PromptScreen/PromptScreen';
import SuccessProduce from '../Components/SuccessProduce/SuccessProduce';
import CheckScreen from '../Screens/CheckScreen/CheckScreen';
import LoadingScreen from '../Screens/LoadingScreen/LoadingScreen';
import SolidLoadingScreen from '../Screens/SolidLoadingScreen/SolidLoadingScreen';
import FinishScreen from '../Screens/FinishScreen/FinishScreen';
import StorageDetailScreen from '../Screens/StorageDetailScreen/StorageDetailScreen';
import ProduceDetailScreen from '../Screens/ProduceDetailScreen/ProduceDetailScreen';
import ArViewer from '../Components/ArViewer/ArViewer';
import RequestLoading from '../Screens/RequestLoading/RequestLoading';
import SearchWorkShopScreen from '../Screens/SearchWorkShopScreen/SearchWorkShopScreen';
import NumberAuthentication from '../Screens/Workshop/SignupScreen/NumberAuthentication/NumberAuthentication';
import SendNumber from '../Screens/Workshop/SignupScreen/SendNumber/SendNumber';
import CreateId from '../Screens/Workshop/SignupScreen/CreateId/CreateId';
import CreatePassword from '../Screens/Workshop/SignupScreen/CreatePassword/CreatePassword';
import CreateWorkShop from '../Screens/Workshop/SignupScreen/CreateWorkshop/CreateWorkShop';
import WorkShopLoginScreen from '../Screens/Workshop/LoginScreen/WorkshopLoginScreen';
import WorkshopMainScreen from '../Screens/Workshop/MainScreen/WorkshopMainScreen';
import SearchClientScreen from '../Screens/Workshop/SearchClientScreen/SearchClientScreen';
import ChatListScreen from '../Screens/Workshop/ChatListScreen/ChatListScreen';
import PaymentScreen from '../Screens/Workshop/PaymentScreen/PaymentScreen';
import DeliveryScreen from '../Screens/Workshop/DeliveryScreen/DeliveryScreen';
import WorkshopMypageScreen from '../Screens/Workshop/MypageScreen/WorkshopMypagescreen';
import SendEstimateScreen from '../Screens/Workshop/SendEstimateScreen/SendEstimateScreen';
import UserProduceDetailScreen from '../Screens/Workshop/UserProduceDetailScreen/UserProduceDetailScreen';
import WorkShopScreen from '../Screens/WorkShopScreen/WorkShopScreen';
import ChatScreen from '../Screens/ChatScreen/ChatScreen';
import NoticeScreen from '../Screens/NoticeScreen/NoticeScreen';
import ProgressDetailScreen from '../Screens/ProgressDetailScreen/ProgressDetailScreen';
import EditInformationScreen from '../Screens/EditInformationScreen/EditInformationScreen';
import AddressScreen from '../Screens/AddressScreen/AddressScreen';
import ArViewerStorage from '../Components/ArViewer/ArViewerStorage';
import EstimateDetailScreen from '../Screens/EstimateDetailScreen/EstimateDetailScreen';
import SelectEstimateScreen from '../Screens/Workshop/SelectEstimateScreen/SelectEstimateScreen';
import DetailEstimateScreen from '../Screens/Workshop/DetailEstimateScreen/DetailEstimateScreen';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name='ProduceScreen' component={ProduceScreen} />
      <Stack.Screen name='StorageScreen' component={StorageScreen} />
      <Stack.Screen name='ProgressScreen' component={ProgressScreen} />
      <Stack.Screen name='MyPageScreen' component={MyPageScreen} />
      <Stack.Screen name='PromptScreen' component={PromptScreen} />
      <Stack.Screen name='SuccessProduce' component={SuccessProduce} />
      <Stack.Screen name='CheckScreen' component={CheckScreen} />
      <Stack.Screen name='LoadingScreen' component={LoadingScreen} />
      <Stack.Screen name='SolidLoadingScreen' component={SolidLoadingScreen} />
      <Stack.Screen name='FinishScreen' component={FinishScreen} />
      <Stack.Screen name='StorageDetailScreen' component={StorageDetailScreen} />
      <Stack.Screen name='ProduceDetailScreen' component={ProduceDetailScreen} />
      <Stack.Screen name='ArViewer' component={ArViewer} />
      <Stack.Screen name='RequestLoading' component={RequestLoading} />
      <Stack.Screen name='SearchWorkShopScreen' component={SearchWorkShopScreen} />
      <Stack.Screen name='NumberAuthentication' component={NumberAuthentication} />
      <Stack.Screen name='SendNumber' component={SendNumber} />
      <Stack.Screen name="CreateId" component={CreateId} />
      <Stack.Screen name='CreatePassword' component={CreatePassword} />
      <Stack.Screen name='CreateWorkShop' component={CreateWorkShop} />
      <Stack.Screen name='WorkshopLoginScreen' component={WorkShopLoginScreen} />
      <Stack.Screen name='WorkshopMainScreen' component={WorkshopMainScreen} />
      <Stack.Screen name='SearchClientScreen' component={SearchClientScreen} />
      <Stack.Screen name='ChatListScreen' component={ChatListScreen} />
      <Stack.Screen name='PaymentScreen' component={PaymentScreen} />
      <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} />
      <Stack.Screen name="WorkshopMypageScreen" component={WorkshopMypageScreen} />
      <Stack.Screen name="SendEstimateScreen" component={SendEstimateScreen} />
      <Stack.Screen name="UserProduceDetailScreen" component={UserProduceDetailScreen} />
      <Stack.Screen name='WorkShopScreen' component={WorkShopScreen} />
      <Stack.Screen name='ChatScreen' component={ChatScreen} />
      <Stack.Screen name='NoticeScreen' component={NoticeScreen}/>
      <Stack.Screen name='ProgressDetailScreen' component={ProgressDetailScreen}/>
      <Stack.Screen name='EditInformationScreen' component={EditInformationScreen}/>
      <Stack.Screen name='AddressScreen' component={AddressScreen}/>
      <Stack.Screen name="ArViewerStorage" component={ArViewerStorage} />
      <Stack.Screen name='EstimateDetailScreen' component={EstimateDetailScreen} />
      <Stack.Screen name='SelectEstimateScreen' component={SelectEstimateScreen} />
      <Stack.Screen name='DetailEstimateScreen' component={DetailEstimateScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;