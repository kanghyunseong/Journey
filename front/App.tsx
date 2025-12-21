import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import Toast, { BaseToast, BaseToastProps, ErrorToast } from 'react-native-toast-message';

import RootNavigator from './src/navigations/root/RootNavigator';
import queryClient from './src/api/queryClient';
import { colors } from '@/constants';
import useThemeStorage from '@/hooks/useThemeStorage';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: colors['light'].BLUE_500 }}
      text1Style={{
        fontSize: 14,
      }}
      text2Style={{
        fontSize: 12,
      }}
    />
  ),
  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: colors['light'].RED_500 }}
      text1Style={{
        fontSize: 14,
      }}
      text2Style={{
        fontSize: 12,
      }}
    />
  ),
};

function App() {
  const { theme } = useThemeStorage();

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
        <NavigationContainer>
          <RootNavigator />
          <Toast config={toastConfig} />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
