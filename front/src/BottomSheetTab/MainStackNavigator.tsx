import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useRoute, RouteProp } from '@react-navigation/native';
import MainBottomTabNavigator from './MainBottomTabNavigator';
import ModalScreen from './ModalScreen';

// 강릉 관련 세부 화면
import FoodDetailScreen from '../GangneungTopTabScreen/FoodPicture/FoodDetailScreen';
import MainDetailScreen from '../GangneungTopTabScreen/MainPicture/MainDetailScreen';
import MuseumDetailScreen from '../GangneungTopTabScreen/MuseumPicture/MuseumDetailScreen';
import OceanDetailScreen from '../GangneungTopTabScreen/OceanPicture/OceanDetailScreen';
import ParkDetailScreen from '../GangneungTopTabScreen/ParkPicture/ParkDetailScreen';

type MainStackParamList = {
  MainBottomTabNavigator: { selectedRegion: 'Gangneung' | 'Sokcho' };
  ModalScreen: undefined;
  FoodDetail: { imageId: string };
  MainDetail: { imageId: string };
  MuseumDetail: { imageId: string };
  OceanDetail: { imageId: string };
  ParkDetail: { imageId: string };
  SokchoStack: undefined;
  CourseDetail: { courseId: string }; // 올바르게 매개변수 설정
};

const Stack = createStackNavigator<MainStackParamList>();

const MainStackNavigator: React.FC = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'MainBottomTabNavigator'>>();
  const { selectedRegion } = route.params;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainBottomTabNavigator"
        component={MainBottomTabNavigator}
        options={{ headerShown: false }}
        initialParams={{ selectedRegion }}
      />
      <Stack.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={{ headerShown: false, presentation: 'modal' }}
      />
      <Stack.Screen 
        name="FoodDetail"
        component={FoodDetailScreen}
        options={{ title: 'FoodDetail' }}
      />
      <Stack.Screen 
        name="MainDetail"
        component={MainDetailScreen}
        options={{ title: 'MainDetail' }}
      />
      <Stack.Screen 
        name="MuseumDetail"
        component={MuseumDetailScreen}
        options={{ title: 'MuseumDetail' }}
      />
      <Stack.Screen 
        name="OceanDetail"
        component={OceanDetailScreen}
        options={{ title: 'OceanDetail' }}
      />
      <Stack.Screen 
        name="ParkDetail"
        component={ParkDetailScreen}
        options={{ title: 'ParkDetail' }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
