import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import SokchoFoodToDoList from '@/SokchoTopTabScreen/SokchoFoodPicture/SokchoFoodToDoList';
import { StackNavigationProp } from '@react-navigation/stack';
import { KKKKParamList } from '../../GangneungTopTabScreen/types';
import SokchoFoodPictureLayout from '@/SokchoTopTabScreen/SokchoFoodPicture/SokchoFoodPictureLayout';
import SokchoFoodPictureSwiper from '@/SokchoTopTabScreen/SokchoFoodPicture/SokchoFoodPictureSwiper';

interface FoodHomeScreenProps {
  navigation: StackNavigationProp<KKKKParamList, 'SokchoFoodDetail'>;
}

const SokchoFoodHomeScreen: React.FC<FoodHomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SokchoFoodPictureSwiper navigation={navigation} />
      <SokchoFoodPictureLayout navigation={navigation} />
      <SokchoFoodToDoList />
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

export default SokchoFoodHomeScreen;
