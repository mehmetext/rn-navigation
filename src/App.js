import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import First from './pages/First';
import Second from './pages/Second';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="First" component={First} />
        <Drawer.Screen name="Second" component={Second} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
