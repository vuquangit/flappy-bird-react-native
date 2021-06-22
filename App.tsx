import React from 'react';
import { View, StyleSheet } from 'react-native';

import HomeScreen from './src/screens/Home'

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
  },
})

export default App
