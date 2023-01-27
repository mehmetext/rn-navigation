import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import First from './pages/First';
import Second from './pages/Second';
import FirstDetail from './pages/FirstDetail';
import SecondDetail from './pages/SecondDetail';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const FirstStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="First" component={First} />
      <Stack.Screen
        name="FirstDetail"
        component={FirstDetail}
        options={{title: 'First Detail'}}
      />
    </Stack.Navigator>
  );
};

const SecondStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Second" component={Second} />
      <Stack.Screen
        name="SecondDetail"
        component={SecondDetail}
        options={{title: 'Second Detail'}}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="FirstStack" component={FirstStack} />
        <Tab.Screen name="SecondStack" component={SecondStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
