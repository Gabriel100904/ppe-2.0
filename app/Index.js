import React from 'react';
import { View, Text } from 'react-native';
import Logo from '../components/Logo';

const IndexScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Logo />
      <Text>Nome do App</Text>
      <Text>
        texto 1
      </Text>
      <Text>
      texto 2
      </Text>
      <Text>
        texto 3
      </Text>
      <Text>
        tetxto 4
      </Text>
    </View>
  );
};

export default IndexScreen;