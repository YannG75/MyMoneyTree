/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import { Home, Upgrade } from './src/screens'

const App = () => {

  return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            style: { backgroundColor: "#263b30"},
            activeTintColor: '#72f3d3',
            inactiveTintColor: '#4c897a',
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Upgrade" component={Upgrade} />
          <Tab.Screen name="Shop" component={Upgrade} />
        </Tab.Navigator>
      </NavigationContainer>
  );
};

export default App;
