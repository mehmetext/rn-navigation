import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Second({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from Second</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
