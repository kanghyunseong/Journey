import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import useAuth from '@/hooks/queries/useAuth';

function SokchoBottomSettingScreen() {
  const { logoutMutation } = useAuth();

  return (
    <SafeAreaView>
      <Text>맵 스크ㄴㄴㄴ린</Text>
      <Button title="로그아웃" onPress={() => logoutMutation.mutate(null)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default SokchoBottomSettingScreen;