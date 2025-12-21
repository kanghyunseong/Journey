import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

function SokChoMainBottomCourse() {
  const images = [
    { id: 1, uri: 'https://via.placeholder.com/150', label: '코스 1' },
    { id: 2, uri: 'https://via.placeholder.com/150', label: '코스 2' },
    { id: 3, uri: 'https://via.placeholder.com/150', label: '코스 3' },
    { id: 4, uri: 'https://via.placeholder.com/150', label: '코스 4' }
  ];

  const handleImagePress = (id:any) => {
    console.log(`Image with id ${id} pressed`);
      };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>인기코스 페이지</Text>
      <View style={styles.imageGrid}>
        {images.map((image) => (
          <TouchableOpacity key={image.id} onPress={() => handleImagePress(image.id)} style={styles.imageWrapper}>
            <Image source={{ uri: image.uri }} style={styles.image} />
            <Text style={styles.imageLabel}>{image.label}</Text>
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
    top: 50
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageWrapper: {
    width: '48%',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  imageLabel: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SokChoMainBottomCourse;