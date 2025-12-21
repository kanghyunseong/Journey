import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type ModalScreenNavigationProp = StackNavigationProp<{
  MainBottomTabNavigator: { selectedRegion: string };
}>;

type Props = {
  navigation: ModalScreenNavigationProp;
};

const ModalScreen: React.FC<Props> = ({ navigation }) => {
  const selectRegion = (region: string) => {
    navigation.navigate('MainBottomTabNavigator', { selectedRegion: region === '강릉' ? 'Gangneung' : 'Sokcho' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>지역 선택</Text>
      <Button title="강릉" onPress={() => selectRegion('강릉')} />
      <Button title="속초" onPress={() => selectRegion('속초')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ModalScreen;
