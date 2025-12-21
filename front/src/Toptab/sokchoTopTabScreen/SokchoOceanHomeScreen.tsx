import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import SokchoOceanPictureLayout from '@/SokchoTopTabScreen/SokchoOceanPicture/SokchoOceanPictureLayout';
import SokchoOceanToDoList from '@/SokchoTopTabScreen/SokchoOceanPicture/SokchoOceanToDoList';
import SokchoOceanPictureSwiper from '@/SokchoTopTabScreen/SokchoOceanPicture/SokchoOceanPictureSwiper';
import { KKKKParamList } from '../../GangneungTopTabScreen/types';
import { StackNavigationProp } from '@react-navigation/stack';

interface SokchoOceanHomeScreenProps {
  navigation: StackNavigationProp<KKKKParamList, 'SokchoOceanDetail'>;
}

const SokchoOceanHomeScreen: React.FC<SokchoOceanHomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SokchoOceanPictureSwiper navigation={navigation} />
      <SokchoOceanPictureLayout navigation={navigation} />
      <SokchoOceanToDoList />
    </ScrollView>
  );
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

export default SokchoOceanHomeScreen;
