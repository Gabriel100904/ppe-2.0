import React from 'react';
import { View, Text } from 'react-native';
import Logo from '../components/Logo';

const SobreScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Logo />
      <Text>Nome do App</Text>
      <Text>
        texto 5
      </Text>
      <Text>
        texto 6
      </Text>
      <Text>
        texto 7
      </Text>
      <Text>
        texto 8
      </Text>
    </View>
  );
};

export default SobreScreen;