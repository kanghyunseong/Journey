import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import OceanPictureLayout from '../../GangneungTopTabScreen/OceanPicture/OceanPictureLayout';
import OceanPictureSwiper from '../../GangneungTopTabScreen/OceanPicture/OceanPictureSwiper';
import OceanToDoList from '../../GangneungTopTabScreen/OceanPicture/OceanToDoList';
import { KKKKParamList } from '../../GangneungTopTabScreen/types';
import { StackNavigationProp } from '@react-navigation/stack';

interface OceanHomeHomeScreenProps {
  navigation: StackNavigationProp<KKKKParamList, 'OceanDetail'>;
}

const OceanHomeScreen: React.FC<OceanHomeHomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <OceanPictureSwiper navigation={navigation} />
      <OceanPictureLayout navigation={navigation} />
      <OceanToDoList />
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

export default OceanHomeScreen;
