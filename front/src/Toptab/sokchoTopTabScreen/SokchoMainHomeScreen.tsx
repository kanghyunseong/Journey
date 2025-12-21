import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import SokchoMainPictureLayout from '@/SokchoTopTabScreen/SokchoMainHome/SokchoMainPictureLayout';
import SokchoMainPictureSwiper from '@/SokchoTopTabScreen/SokchoMainHome/SokchoMainPictureSwiper';
import SokchoMainToDoList from '@/SokchoTopTabScreen/SokchoMainHome/SokchoMainToDoList';
import { StackNavigationProp } from '@react-navigation/stack';
import { KKKKParamList } from '../../GangneungTopTabScreen/types';

interface SokchoMainHomeScreenProps {
  navigation: StackNavigationProp<KKKKParamList, 'SokchoMainDetail'>;
}

const SokchoMainHomeScreen: React.FC<SokchoMainHomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SokchoMainPictureSwiper navigation={navigation} />
      <SokchoMainPictureLayout navigation={navigation} />
      <SokchoMainToDoList  />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
});

export default SokchoMainHomeScreen;
