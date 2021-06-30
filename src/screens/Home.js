import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, ImageBackground } from "react-native";
import LottieView from "lottie-react-native";



const Home = () => {

  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/art_nature_background.jpeg")}
        style={{width: "100%", height: "100%", alignItems: "center"}}
      >
      <View style={styles.counter}>
        <View style={styles.lottieCounter}>
          <LottieView source={require("../assets/lottieFile/30285-buddy-bear-18.json")} autoPlay loop />
        </View>
            <Text style={{color: "white",}}>{count}</Text>
      </View>
      <TouchableWithoutFeedback onPress={() => setCount(count+1)}>
        <LottieView colorFilters={[{
          keypath: "icon_circle",
          color: "#D6EAECD8"
        }]} source={require("../assets/lottieFile/plant.json")} autoPlay loop />
      </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#f7f0e8"
  },
  counter: {
    position: "relative",
    zIndex: 5,
    borderRadius: 15,
    width: 150,
    height: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  lottieCounter: {
    position: "absolute",
    top: 0,
    width: 50,
    height: 30,
    left: 0
  }
});

export default Home;
