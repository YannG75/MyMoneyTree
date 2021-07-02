/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useEffect } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GameContext, GameProvider } from "./src/context";
const Tab = createBottomTabNavigator();

import { Home, Upgrade } from './src/screens'
import Shop from "./src/screens/Shop";

const CustomTab = ({ state, navigation }) => {
  return (
    <View style={styles.container}>
      {
        state.routes.map((route, index) => {
          let tabImage;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            })
            const isFocused = state.index === index;

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          }

          switch (route.name) {
            case "Home" :
              tabImage = require("./src/assets/images/home/Home_34_2x.png")
              break
            case "Upgrade" :
              tabImage = require("./src/assets/images/home/Upgrade_35_2x.png")
              break
            case "Shop" :
              tabImage = require("./src/assets/images/home/Shop_33_2x.png")
              break
          }
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              onPress={onPress}
              style={styles.tabImageContainer}
            >
              <ImageBackground source={tabImage}
                               style={{width: "100%", height: "100%", alignItems: "center"}}
                               resizeMode="contain"
              >
              </ImageBackground>
            </TouchableOpacity>
          )

        })
      }
    </View>
  )
}

const App = () => {

  return (
    < GameProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBar={props => <CustomTab {...props} />}
        >
          <Tab.Screen name="Upgrade" component={Upgrade} />
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Shop" component={Shop} />
        </Tab.Navigator>
      </NavigationContainer>
    </GameProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container : {
    flexDirection : "row",
    justifyContent : "space-around",
    alignItems : "center",
    backgroundColor: "#31842c",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  tabImageContainer : {
    width: 120,
    height: 70,

  }
})
