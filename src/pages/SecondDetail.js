import {View, Button} from 'react-native';
import React from 'react';

export default function SecondDetail({navigation}) {
  return (
    <View>
      <Button
        title="Go To First Detail"
        onPress={() => {
          navigation.navigate('FirstDetail');
        }}
      />
    </View>
  );
}
