import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import SokchoMuseumPictureLayout from '@/SokchoTopTabScreen/SokchoMuseumPicture/SokchoMuseumPictureLayout';
import SokchoMuseumPictureSwiper from '@/SokchoTopTabScreen/SokchoMuseumPicture/SokchoMuseumPictureSwiper';
import SokchoMuseumToDoList from '@/SokchoTopTabScreen/SokchoMuseumPicture/SokchoMuseumToDoList';
import { KKKKParamList } from '../../GangneungTopTabScreen/types';
import { StackNavigationProp } from '@react-navigation/stack';

interface SokchoMuseumHomeScreenProps {
  navigation: StackNavigationProp<KKKKParamList, 'SokchoMuseumDetail'>;
}

const SokchoMuseumHomeScreen: React.FC<SokchoMuseumHomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SokchoMuseumPictureSwiper navigation={navigation} />
      <SokchoMuseumPictureLayout navigation={navigation} />
      <SokchoMuseumToDoList />
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

export default SokchoMuseumHomeScreen;
