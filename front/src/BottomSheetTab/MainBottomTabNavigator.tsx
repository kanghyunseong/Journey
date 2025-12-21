import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainToptabNavigator from '../ToptabNavigator/MainToptabNavigator';
import BottomsheetCustomButton from './BottomSheetCustomButton';
import MainBottomCourse from '@/BottomTab/GangneungBottomTab/CourseBottomScreen';
import ChatbotBottomScreen from '@/BottomTab/GangneungBottomTab/ChatbotBottomScreen';
import MainBottomSettingScreen from '@/BottomTab/GangneungBottomTab/MainBottomSettingScreen';
import BottomSheet from './BottomSheet';
import SokchoBottomSettingScreen from '@/BottomTab/SokchoBottomTab/SokchoBottomSettingScreen';
import SokchoChatbotBottomScreen from '@/BottomTab/SokchoBottomTab/SokchoChatbotBottomScreen';
import SokChoMainBottomCourse from '@/BottomTab/SokchoBottomTab/SokChoMainBottomCourse';
import SokchoMapBottomScreen from '@/BottomTab/SokchoBottomTab/SokchoMapBottomScreen';
import MapBottomScreen from '@/BottomTab/GangneungBottomTab/MapBottomScreen';

const Tab = createBottomTabNavigator();

const MainBottomTabNavigator: React.FC<any> = ({ route }) => {
  const [selectedRegion, setSelectedRegion] = useState('Gangneung');
  const [modalVisible, setModalVisible] = useState(false);

  const handleRegionChange = (region: 'Gangneung' | 'Sokcho') => {
    setSelectedRegion(region);
  };

  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="홈"
        screenOptions={{
          tabBarActiveTintColor: '#334155', // 선택된 아이콘의 색상
          tabBarInactiveTintColor: '#cbd5e1',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'white',
            elevation: 0,
            borderTopWidth: 0, // 하단 경계선 제거
            height: 70, // 바텀탭 높이 조정
            paddingBottom: 10, // 아이콘과 텍스트 간격 조정
            marginTop: 5
          },
          tabBarLabelStyle: {
            fontSize: 14, // 폰트 사이즈 조정
            
          },
        }}
      >
        {selectedRegion === 'Gangneung' ? (
          <>
            <Tab.Screen
              name="홈"
              children={() => <MainToptabNavigator selectedRegion="강릉" />}
              options={{
                tabBarLabel: '홈',
                tabBarIcon: ({ color }) => <Icon name="home" color={color} size={30} />, // 아이콘 크기 조정
              }}
            />
            <Tab.Screen
              name="인기코스"
              component={MainBottomCourse}
              options={{
                tabBarLabel: '인기코스',
                tabBarIcon: ({ color }) => <Icon name="star" color={color} size={30} />, // 아이콘 크기 조정
              }}
            />
            <Tab.Screen
              name="지도"
              component={MapBottomScreen}
              options={{
                tabBarLabel: '',
                tabBarIcon: ({ color }) => <Icon name="map" color={color} size={30} />, // 아이콘 크기 조정
              }}
            />
            <Tab.Screen
              name="챗봇"
              component={ChatbotBottomScreen}
              options={{
                tabBarLabel: '챗봇',
                tabBarIcon: ({ color }) => <Icon name="chat" color={color} size={30} />, // 아이콘 크기 조정
              }}
            />
            <Tab.Screen
              name="설정"
              component={MainBottomSettingScreen}
              options={{
                tabBarLabel: '설정',
                tabBarIcon: ({ color }) => <Icon name="settings" color={color} size={30} />, // 아이콘 크기 조정
              }}
            />
          </>
        ) : (
          <>
            <Tab.Screen
              name="홈"
              children={() => <MainToptabNavigator selectedRegion="속초" />}
              options={{
                tabBarLabel: '홈',
                tabBarIcon: ({ color }) => <Icon name="home" color={color} size={30} />, // 아이콘 크기 조정
              }}
            />
            <Tab.Screen
              name="인기코스"
              component={SokChoMainBottomCourse}
              options={{
                tabBarLabel: '인기코스',
                tabBarIcon: ({ color }) => <Icon name="star" color={color} size={30} />, // 아이콘 크기 조정
              }}
            />
            <Tab.Screen
              name="맵"
              component={SokchoMapBottomScreen}
              options={{
                tabBarLabel: '맵',
                tabBarIcon: ({ color }) => <Icon name="map" color={color} size={30} />, // 아이콘 크기 조정
              }}
            />
            <Tab.Screen
              name="챗봇"
              component={SokchoChatbotBottomScreen}
              options={{
                tabBarLabel: '챗봇',
                tabBarIcon: ({ color }) => <Icon name="chat" color={color} size={30} />, // 아이콘 크기 조정
              }}
            />
            <Tab.Screen
              name="설정"
              component={SokchoBottomSettingScreen}
              options={{
                tabBarLabel: '설정',
                tabBarIcon: ({ color }) => <Icon name="settings" color={color} size={30} />, // 아이콘 크기 조정
              }}
            />
          </>
        )}
      </Tab.Navigator>

      {/* 중앙에 커스텀 버튼을 겹치게 배치 */}
      <View style={styles.customButtonContainer}>
        <BottomsheetCustomButton onRegionChange={handleRegionChange} />
      </View>

      {/* 모달 표시 */}
      <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onRegionChange={handleRegionChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  customButtonContainer: {
    position: 'absolute',
    bottom: -658, // 중앙에 위치 조정 (바텀탭 위에 겹치게)
    left: '38.6%',
    transform: [{ translateX: -30 }], // 버튼을 가운데 정렬
    zIndex: 999, // 다른 요소 위에 배치
    backgroundColor: 'white', // 버튼 배경색 조정 (필요시)
    borderRadius: 30, // 둥글게 만들기
    padding: 10, // 여백 추가
  },
});

export default MainBottomTabNavigator;
