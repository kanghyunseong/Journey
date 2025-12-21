import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RetryErrorBoundary from '@/components/common/RetryErrorBoundary';
import AuthStackNavigator from '../stack/AuthStackNavigator';
import useAuth from '@/hooks/queries/useAuth';
import SplashScreen from 'react-native-splash-screen';
import MainBottomTabNavigator from '@/BottomSheetTab/MainBottomTabNavigator';
import { GangneungDetails } from '@/GangneungTopTabScreen/GangneungDetails'; // 강릉 관련 디테일들
import { SokchoDetails } from '@/SokchoTopTabScreen/SokchoDetails'; // 속초 관련 디테일들

const Stack = createStackNavigator();

function RootNavigator() {
  const { isLogin, isLoginLoading } = useAuth();

  useEffect(() => {
    if (!isLoginLoading) {
      setTimeout(() => {
        SplashScreen.hide();
      }, 500);
    }
  }, [isLoginLoading]);

  return (
    <RetryErrorBoundary>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLogin ? (
          <>
          </>
        ) : (
          <Stack.Screen name="Auth" component={AuthStackNavigator} />
        )}
      </Stack.Navigator>
    </RetryErrorBoundary>
  );
}

export default RootNavigator;
