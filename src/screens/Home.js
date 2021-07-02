import React, { useContext, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, ImageBackground, Image, Animated } from "react-native";
import LottieView from "lottie-react-native";
import { GameContext } from "../context";


const Home = () => {

  const {state: {moneyCount, clickValue, moneyS}, getMoney} = useContext(GameContext)

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const scale = () => {
    Animated.sequence([
      // decay, then spring to start and twirl
      Animated.timing(scaleAnim, {
        // coast to a stop
        toValue: 1.05, // velocity from gesture release
        duration: 100,
        useNativeDriver: true
      }),
      Animated.timing(scaleAnim, {
        // coast to a stop
        toValue: 1, // velocity from gesture release
        duration: 100,
        useNativeDriver: true
      }),
    ]).start();
  }

  useEffect(() => {
    let time;
     time = setInterval(() => {
       // console.log(moneyS)
      if (moneyS !== 0)
      getMoney(moneyS)
    },1000)

    return () => {
      clearInterval(time)
    }
  }, [moneyS])



  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/home/home_64_2x.png")}
        style={{ width: "100%", height: "100%", alignItems: "center" }}
      >
        <ImageBackground
          style={styles.counter}
          resizeMode="stretch"
          source={require("../assets/images/home/home_40_2x.png")}
        >
          <Image style={styles.lottieCounter} source={require("../assets/images/home/home_41_2x.png")} />
          <Text style={{ color: "white", fontFamily: "RifficFree-Bold" }}>{moneyCount >= 1000 ? (moneyCount/1000).toFixed(2) + "k" : moneyCount}</Text>
        </ImageBackground>

          <TouchableWithoutFeedback onPress={(e) => {
            getMoney(clickValue);
            scale()
          }}>
            <View style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
            <Animated.Image style={[styles.bud, {transform: [{scale: scaleAnim}]}]} source={require("../assets/images/home/budV2_45_2x.png")} />
            </View>
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
    justifyContent: "center"
  },
  counter: {
    position: "relative",
    zIndex: 5,
    borderRadius: 15,
    width: 150,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  lottieCounter: {
    position: "absolute",
    top: 8,
    width: 25,
    height: 25,
    resizeMode: "cover",
    left: 10,
  },
  bud: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    position: "relative",
    top: 70
  }
});

export default Home;
