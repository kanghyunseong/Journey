import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import MuseumPictureSwiper from '../../GangneungTopTabScreen/MuseumPicture/MuseumPictureSwiper';
import MuseumToDoList from '../../GangneungTopTabScreen/MuseumPicture/MuseumToDoList';
import MuseumPictureLayout from '../../GangneungTopTabScreen/MuseumPicture/MuseumPictureLayout';
import { KKKKParamList } from '../../GangneungTopTabScreen/types';
import { StackNavigationProp } from '@react-navigation/stack';

interface MuseumHomeScreenProps {
  navigation: StackNavigationProp<KKKKParamList, 'MuseumDetail'>;
}

const MuseumHomeScreen: React.FC<MuseumHomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <MuseumPictureSwiper navigation={navigation} />
      <MuseumPictureLayout navigation={navigation} />
      <MuseumToDoList />
    </ScrollView>
  );
};

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

export default MuseumHomeScreen;
