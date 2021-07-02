import React, { useContext } from "react";
import { View, StyleSheet, ScrollView, ImageBackground, Text, TouchableOpacity, Image } from "react-native";
import { GameContext } from "../context";

const Upgrade = () => {
  const {state: {upgrades, moneyCount}, buyUpgrade} = useContext(GameContext)

  const buy = (upgrade) => {
    if(moneyCount >= upgrade.price)
    buyUpgrade(upgrade)
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/images/upgrade/UpgradeBg_37_2x.png")}
        style={{ width: "100%", height: "100%", alignItems: "center" }}
      >
        <View style={styles.title}>
          <ImageBackground
            resizeMode="contain"
            style={{ width: "100%", height: 100 }}
            source={require("../assets/images/upgrade/UpgradeTitle_51_2x.png")} />
        </View>
        <ScrollView contentContainerStyle={{ alignItems: "center", paddingTop: 20 }}>
          <ImageBackground
            style={styles.counter}
            resizeMode="stretch"
            source={require("../assets/images/home/home_40_2x.png")}
          >
            <Image style={styles.lottieCounter} source={require("../assets/images/home/home_41_2x.png")} />
            <Text style={{ color: "white", fontFamily: "RifficFree-Bold" }}>{moneyCount >= 1000 ? (moneyCount/1000).toFixed(2) + "k" : moneyCount}</Text>
          </ImageBackground>
          {
            upgrades.map((upgrade, index) => (
              <View key={index} style={styles.upgradeElementContainer}>
                <ImageBackground
                  source={require("../assets/images/upgrade/Upgrade_49_2x.png")}
                  resizeMode="cover"
                  style={styles.upgradeElement}
                >
                  <Text style={[styles.text, { marginLeft: 10 }]}>
                    {upgrade.name}
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ marginRight: 10, width: 50, height: 50 }}>
                      <ImageBackground
                        resizeMode="cover"
                        style={{
                          width: "100%",
                          height: "100%",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 10,
                          overflow: "hidden",
                        }} source={require("../assets/images/upgrade/Count65_2x.png")}>
                        <Text style={styles.text}>
                          {upgrade.count}
                        </Text>
                      </ImageBackground>
                    </View>
                    <TouchableOpacity
                      style={{ width: 80, height: 40, marginRight: 10 }}
                      onPress={() => buy(upgrade)}
                    >
                      <ImageBackground style={styles.price} source={require("../assets/images/upgrade/Price53_2x.png")}>
                        <Text style={[styles.text, {marginRight: 5, fontSize: 15 }]}>
                          {upgrade.price >= 1000 ? upgrade.price / 1000 + "k" : upgrade.price}
                        </Text>
                        <Image style={styles.tinyMoney} source={require("../assets/images/home/home_41_2x.png")} />
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </View>
            ))
          }
        </ScrollView>
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
  title: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",

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
    marginBottom: 10,
  },
  lottieCounter: {
    position: "absolute",
    top: 8,
    width: 25,
    height: 25,
    resizeMode: "cover",
    left: 10,
  },
  upgradeElement: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    alignItems: "center",
  },
  upgradeElementContainer: {
    width: "93%",
    height: 70,
    flexDirection: "row",
    marginBottom: 10,
  },
  text: {
    fontFamily: "RifficFree-Bold",
    color: "white",
    fontSize: 18,
  },
  tinyMoney: {
    width: 20,
    height: 20,
  },
  price: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
});
