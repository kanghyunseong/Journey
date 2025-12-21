import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';

function MainBottomCourse() {
  const [images, setImages] = useState<any[]>([]); // 이미지 데이터를 저장할 상태
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState<string | null>(null); // 오류 상태

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://apis.data.go.kr/B551011/KorService1/areaBasedList1', {
          params: {
            numOfRows: 12,
            pageNo: 1, // 첫 페이지로 설정
            MobileOS: 'And',
            MobileApp: 'AppTest',
            ServiceKey: process.env.Tour_API, // 발급받은 유효한 API 키를 넣으세요
            listYN: 'Y',
            arrange: 'A',
            contentTypeId: 25,
            areaCode: 32,
            sigunguCode: 1,
            cat1: 'C01', // 카테고리 코드 (예시)
            cat2: '',
            cat3: ''
          },
          headers: { 'Content-Type': 'application/xml' }
        });

        const parser = new XMLParser({
          ignoreAttributes: false,
          attributeNamePrefix: '',
        });
        const jsonObj = parser.parse(response.data);

        if (jsonObj?.response?.body?.items?.item) {
          const items = jsonObj.response.body.items.item;
          const fetchedImages = items
            .filter((item: { firstimage: any; }) => item.firstimage)
            .map((item: { contentid: any; title: any; firstimage: any; }) => ({
              id: item.contentid.toString(),
              title: item.title || '설명 없음',
              source: item.firstimage
            }));
          
          setImages(fetchedImages);
        } else {
          setError('이미지가 없습니다.');
        }
      } catch (error) {
        console.error('이미지 로드 오류:', error);
        setError('이미지를 불러오는 데 실패했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>인기코스 페이지</Text>
      <View style={styles.imageGrid}>
        {images.map((image) => (
          <TouchableOpacity key={image.id} style={styles.imageWrapper}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: image.source }} style={styles.image} />
              <Text style={styles.imageLabel}>{image.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    top: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  imageGrid: {
    flexDirection: 'column',  // 이미지를 세로로 배치
    justifyContent: 'flex-start', // 위에서부터 차례대로 배치
    marginTop: 10,
  },
  imageWrapper: {
    width: '100%',  // 이미지를 한 줄에 하나씩 배치
    marginBottom: 20,  // 이미지 간의 간격을 좀 더 넓게 설정
    alignItems: 'center',  // 이미지와 텍스트 중앙 정렬
  },
  imageContainer: {
    backgroundColor: 'white',  // 하얀색 배경 추가
    padding: 16,  // 내부 여백
    width: '100%',  // 너비는 100%로 설정
    height: 230,  // 고정 높이 설정 (이미지 + 라벨 크기 합산)
    borderRadius: 8,  // 라운드 처리
    shadowColor: '#000',  // 그림자 효과
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,  // 안드로이드 그림자 효과
    justifyContent: 'center',  // 세로 중앙 정렬
    alignItems: 'center',  // 가로 중앙 정렬
  },
  image: {
    width: '100%',
    height: 170,  // 이미지 크기 높이 조정
    borderRadius: 8,
    marginBottom: 10,
  },
  imageLabel: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default MainBottomCourse;
