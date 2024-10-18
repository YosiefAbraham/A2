import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  Touchable,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from "react-native";
import Profiles from "../../assets/Profiles";
import Icons from "../../assets/Icons";
import { Themes } from "../../assets/Themes";
import React, { useState } from "react";

const Body = ({ isThemeDark }) => {
  const [isPhotoLiked, setPhotoLiked] = useState(false);
  const selected = () => {
    setPhotoLiked((prevState) => !prevState);
    alert(
      "Do you want James to see this? Upgrade to Crinj Premium today and start a convo!"
    );
  };

  const currentTheme = isThemeDark ? Themes.light : Themes.dark;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[styles.firstPart, { backgroundColor: currentTheme.navigation }]}
      >
        <Text
          style={[styles.words, { color: isThemeDark ? "white" : "black" }]}
        >
          {"Me and my best friend"}
        </Text>
        <View>
          <Image source={Profiles.landay.image} style={styles.image} />
          <Pressable
            style={[
              styles.likeWrapper, //style
              { backgroundColor: isThemeDark ? "black" : "white" },
            ]}
            onPress={selected}
          >
            <Image
              source={
                isPhotoLiked
                  ? Icons.likeOn[isThemeDark ? "dark" : "light"]
                  : Icons.likeOff[isThemeDark ? "dark" : "light"]
              }
              style={styles.likeIcon} //style
            />
          </Pressable>
        </View>
      </View>

      <View
        style={[
          styles.secondPart, //style
          { backgroundColor: currentTheme.navigation },
        ]}
      >
        <Text
          style={[styles.wordsTwo, { color: isThemeDark ? "white" : "black" }]}
        >
          {"My hottest take"}
        </Text>
        <View style={styles.fixOrientation}>
          <Image
            source={Icons.player[isThemeDark ? "dark" : "light"]}
            style={styles.playerIcon}
          />
          <Image
            source={Icons.audioWave[isThemeDark ? "dark" : "light"]}
            style={styles.audioIcon}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
  },
  firstPart: {
    flexDirection: "column",
    borderRadius: 10,
    width: "90%",
    marginTop: "-70%",
    borderColor: "lightgrey",
    borderWidth: 1,
    alignItems: "center",
    alignSelf: "center",
  },
  secondPart: {
    marginTop: "8%",
    borderRadius: 10,
    padding: "5%",
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
  },
  image: {
    width: "100%", // feel free to adjust this!
    height: 302,
    aspectRatio: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  words: {
    fontFamily: "Sydney-Bold", // 'Sydney' is the non-bold version
    fontSize: 20,
    marginTop: "4%",
    marginBottom: "4%",
    marginRight: "30%",
  },
  wordsTwo: {
    fontFamily: "Sydney-Bold", // 'Sydney' is the non-bold version
    fontSize: 18,
    marginBottom: 10,
    //marginTop: "4%",
    //marginBottom: "4%",
    marginRight: "50%",
    //textAlign: "start",
    //flex: "100%",
  },
  likeWrapper: {
    justifyContent: "center",
    alignItems: "center",
    top: "80%",
    left: "75%",
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 45,
  },
  fixOrientation: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  likeIcon: {
    width: 30,
    height: 30,
  },
  playerIcon: {
    width: 55,
    height: 55,
    marginRight: 10,
  },
  audioIcon: {
    flexShrink: 1,
    maxWidth: "63%",
    height: 50,
    resizeMode: "contain",
  },
});

export default Body;

/* Boneyard

<Button source={Icons.heart_dark} style={styles.heartIcon} />




*/
