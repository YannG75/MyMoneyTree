import React from "react";
import { View, StyleSheet, ScrollView, ImageBackground, Text, TouchableOpacity, Image } from "react-native";

const upgrades = [
  {
    name: "engrais eco+",
    price: 5,
    count: 0,
  }, {
    name: "engrais Bon Marché",
    price: 100,
    count: 0,
  }, {
    name: "arrosoire eco+",
    price: 350,
    count: 0,
  }, {
    name: "engrais rare",
    price: 1000,
    count: 0,
  }, {
    name: "arrosoire Bon Marché ",
    price: 2500,
    count: 0,
  }, {
    name: "engrais de luxe",
    price: 10000,
    count: 0,
  },

];

const Upgrade = () => {
  return (
    <View style={{ flex: 1,  }}>
      <ImageBackground
        source={require("../assets/images/upgrade/UpgradeBg_37_2x.png")}
        style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}
      >
        <Text style={styles.text}>Work in progress...</Text>
      </ImageBackground>
    </View>
  );

};

export default Upgrade;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  text: {
    fontFamily: "RifficFree-Bold",
    color: "white",
    fontSize: 18,
  },

});
