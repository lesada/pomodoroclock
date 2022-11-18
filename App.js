import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import Timer from './src/components/Timer';

const App = () => {
  return (
    <View style={styles.container}>
      <Timer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
});

export default App;
