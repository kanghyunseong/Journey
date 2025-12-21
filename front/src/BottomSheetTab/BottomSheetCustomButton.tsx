import React, { useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomSheet from './BottomSheet';

const BottomsheetCustomButton: React.FC<{ onRegionChange: (region: 'Gangneung' | 'Sokcho') => void }> = ({ onRegionChange }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(true)} style={styles.button}>
        <Icon name="public" color="#334155" size={90} />
      </Pressable>
      <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onRegionChange={onRegionChange}  // 지역 변경 함수 전달
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 658, // 하단에서 20px 만큼 위로
    left: 60, // 화면의 중앙에 위치
    transform: [{ translateX: -30 }], // 버튼 크기에 맞춰 조정
    zIndex: 999,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 30,
    // padding: 30, // 버튼 크기 조정
    
  },
}); 

export default BottomsheetCustomButton;
