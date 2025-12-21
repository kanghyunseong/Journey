import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import ParkPictureLayout from '../../GangneungTopTabScreen/ParkPicture/ParkPictureLayout';
import ParkPictureSwiper from '../../GangneungTopTabScreen/ParkPicture/ParkPictureSwiper';
import ParkToDoList from '../../GangneungTopTabScreen/ParkPicture/ParkToDoList';
import { KKKKParamList } from '../../GangneungTopTabScreen/types';
import { StackNavigationProp } from '@react-navigation/stack';


interface ParkHomeScreenProps {
  navigation: StackNavigationProp<KKKKParamList, 'ParkDetail'>;
}

const ParkHomeScreen: React.FC<ParkHomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ParkPictureSwiper navigation={navigation} />
      <ParkPictureLayout navigation={navigation} />
      <ParkToDoList navigation={navigation}/>
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

export default ParkHomeScreen;
