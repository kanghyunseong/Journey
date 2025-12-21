import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import SokchoParkPictureLayout from '@/SokchoTopTabScreen/SokchoParkPicture/SokchoParkPictureLayout';
import SokchoParkPictureSwiper from '@/SokchoTopTabScreen/SokchoParkPicture/SokchoParkPictureSwiper';
import SokchoParkToDoList from '@/SokchoTopTabScreen/SokchoParkPicture/SokchoParkToDoList';
import { KKKKParamList } from '../../GangneungTopTabScreen/types';
import { StackNavigationProp } from '@react-navigation/stack';


interface SokchoParkHomeScreenProps {
  navigation: StackNavigationProp<KKKKParamList, 'SokchoParkDetail'>;
}

const SokchoParkHomeScreen: React.FC<SokchoParkHomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SokchoParkPictureSwiper navigation={navigation} />
      <SokchoParkPictureLayout navigation={navigation} />
      <SokchoParkToDoList />
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

export default SokchoParkHomeScreen;
