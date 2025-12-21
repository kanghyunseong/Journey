import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  PanResponder,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface BottomSheetProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  onRegionChange: (region: 'Gangneung' | 'Sokcho') => void; // region 변경 시 호출되는 함수
}

const BottomSheet: React.FC<BottomSheetProps> = ({ modalVisible, setModalVisible, onRegionChange }) => {
  const screenHeight = Dimensions.get('screen').height;
  const panY = useRef(new Animated.Value(screenHeight)).current;

  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const resetBottomSheet = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const closeBottomSheet = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 300,
    useNativeDriver: true,
  });

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: (event, gestureState) => {
        panY.setValue(gestureState.dy);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > 0 && gestureState.vy > 1.5) {
          closeModal();
        } else {
          resetBottomSheet.start();
        }
      },
    })
  ).current;

  useEffect(() => {
    if (modalVisible) {
      resetBottomSheet.start();
    }
  }, [modalVisible]);

  const closeModal = () => {
    closeBottomSheet.start(() => {
      setModalVisible(false);
    });
  };

  const images = [
    {
      uri: 'http://tong.visitkorea.or.kr/cms/resource/17/2818017_image2_1.JPG',
      label: '속초',
      region: 'Sokcho' as 'Gangneung' | 'Sokcho',
    },
    {
      uri: 'http://tong.visitkorea.or.kr/cms/resource/22/2671422_image2_1.jpg',
      label: '강릉',
      region: 'Gangneung' as 'Gangneung' | 'Sokcho',
    },
  ];

  const handleImageClick = (region: 'Gangneung' | 'Sokcho') => {
    onRegionChange(region);  // 지역 변경 함수 호출
    closeModal();
  };

  return (
    <Modal
      visible={modalVisible}
      animationType="fade"
      transparent
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.background} />
        </TouchableWithoutFeedback>
        <Animated.View
          style={{ ...styles.bottomSheetContainer, transform: [{ translateY }] }}
          {...panResponders.panHandlers}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={closeModal}>
              <Icon name="close" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.textContainer}>
              지역선택
            </Text>
          </View>
          <ScrollView 
            horizontal 
            contentContainerStyle={styles.scrollViewContent}
            showsHorizontalScrollIndicator={false}
          >
            {images.map((image, index) => (
              <TouchableOpacity key={index} onPress={() => handleImageClick(image.region)}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: image.uri }}
                    style={styles.image}
                  />
                  <Text style={styles.imageLabel}>{image.label}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  background: {
    flex: 1,
  },
  bottomSheetContainer: {
    height: screenHeight * 0.357, 
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  scrollViewContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  image: {
    width: 120,
    height: screenHeight * 0.20,
    borderRadius: 10,
  },
  imageLabel: {
    marginTop: 5,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textContainer: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 20,
  },
});

export default BottomSheet;
