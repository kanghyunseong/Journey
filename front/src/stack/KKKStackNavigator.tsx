import React from 'react';
import {StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthHomeScreen from '@/screens/auth/AuthHomeScreen';
import LoginScreen from '@/screens/auth/LoginScreen';
import { authNavigations } from '@/constants';
import SignupScreen from '@/screens/auth/SignupScreen';

export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined;  // AUTH_HOME 스크린 이름과 매개변수 정의
  [authNavigations.LOGIN]: undefined;  // LOGIN 스크린 이름과 매개변수 정의
  [authNavigations.SIGNUP]: undefined;
  FoodDetail: { imageId: string }; 
};

const Stack = createStackNavigator<AuthStackParamList>();

function KKKStackNavigator() {
  return (
  <Stack.Navigator screenOptions={{
    cardStyle: {
      backgroundColor: 'white',
    },
    headerStyle: {
      backgroundColor: 'white',
      shadowColor: 'gray',
    },
    headerTitleStyle: {
      fontSize: 15,
    },
    headerTintColor: 'black',
  }}>
    <Stack.Screen 
      name={authNavigations.AUTH_HOME} //authNavigations에서 얻어온 변수명
      component={AuthHomeScreen}
      options={{
        headerTitle: ' ', //헤더 제목
        headerShown: false, //헤더 없얘기
      }}
    />
    <Stack.Screen 
      name={authNavigations.LOGIN}
      component={LoginScreen}
      options={{
        headerTitle: '로그인',
      }}
    />
    <Stack.Screen
      name={authNavigations.SIGNUP} 
      component={SignupScreen}
      options={{
        headerTitle: '회원가입',
      }}
    />
  </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default KKKStackNavigator;