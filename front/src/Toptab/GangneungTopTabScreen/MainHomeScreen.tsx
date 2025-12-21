import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import MainPictureSwiper from '../../GangneungTopTabScreen/MainPicture/MainPictureSwiper';
import MainPictureLayout from '../../GangneungTopTabScreen/MainPicture/MainPictureLayout';
import MainToDoList from '../../GangneungTopTabScreen/MainPicture/MainToDoList';
import { StackNavigationProp } from '@react-navigation/stack';
import { KKKKParamList } from '../../GangneungTopTabScreen/types';

interface MainHomeScreenProps {
  navigation: StackNavigationProp<KKKKParamList, 'MainDetail'>;
}

const MainHomeScreen: React.FC<MainHomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MainPictureSwiper navigation={navigation} />
      <MainPictureLayout navigation={navigation} />
      <MainToDoList  />
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

export default MainHomeScreen;
