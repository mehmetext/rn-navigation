import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

export default function Second({navigation, route}) {
  let name = route.params.name;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from {name}</Text>
      <Button
        title="Pop to Top"
        onPress={() => {
          navigation.popToTop();
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
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
