import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import Logo from '../components/Logo';

const HomeScreen = () => {
  const images = [
    { id: 1, url: 'https://example.com/image1.jpg' },
    { id: 2, url: 'https://example.com/image2.jpg' },
    { id: 3, url: 'https://example.com/image3.jpg' },
    { id: 4, url: 'https://example.com/image4.jpg' },
    { id: 5, url: 'https://example.com/image5.jpg' },
    { id: 6, url: 'https://example.com/image6.jpg' },
    { id: 7, url: 'https://example.com/image7.jpg' },
    { id: 8, url: 'https://example.com/image8.jpg' },
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Logo />
      <Text>Nome do App</Text>
      <FlatList
        data={images}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={{ flex: 1, padding: 5 }}>
            <Image
              source={{ uri: item.url }}
              style={{ width: '100%', height: 200 }}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default HomeScreen;