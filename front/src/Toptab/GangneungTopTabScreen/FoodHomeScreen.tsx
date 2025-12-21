import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import FoodPictureLayout from '../../GangneungTopTabScreen/FoodPicture/FoodPictureLayout';
import FoodPictureSwiper from '../../GangneungTopTabScreen/FoodPicture/FoodPictureSwiper';
import FoodToDoList from '../../GangneungTopTabScreen/FoodPicture/FoodToDoList';
import { StackNavigationProp } from '@react-navigation/stack';
import { KKKKParamList } from '../../GangneungTopTabScreen/types';

interface FoodHomeScreenProps {
  navigation: StackNavigationProp<KKKKParamList, 'FoodDetail'>;
}

const FoodHomeScreen: React.FC<FoodHomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FoodPictureSwiper navigation={navigation} />
      <FoodPictureLayout navigation={navigation} />
      <FoodToDoList />
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

export default FoodHomeScreen;
