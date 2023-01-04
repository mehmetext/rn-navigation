import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function First({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from First</Text>
      <Button
        title="Go to Second"
        onPress={() => {
          navigation.navigate('Second', {name: 'Mehmet'});
        }}
      />
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
