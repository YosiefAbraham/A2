import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { Icons, Themes } from "../../assets/Themes";
import React from "react";

const Footer = ({ isThemeDark }) => {
  return (
    <View
      style={[
        styles.navigationContainer,
        {
          backgroundColor: (isThemeDark ? Themes.dark : Themes.light)
            .navigation,
        },
      ]}
    >
      <View style={styles.spacedImages}>
        <Image
          source={Icons.discover[isThemeDark ? "dark" : "light"]} // toggle light and dark mode
          style={styles.discoverIcon}
        />
        <Image
          source={Icons.heart[isThemeDark ? "dark" : "light"]} // toggle light and dark mode
          style={styles.matchesIcon}
        />
        <Image
          source={Icons.messages[isThemeDark ? "dark" : "light"]} // toggle light and dark mode
          style={styles.dmsIcon}
        />
      </View>

      <View style={styles.spacedWords}>
        <Text
          style={[
            styles.wordsFooter, //style
            { color: isThemeDark ? "black" : "white" }, // toggle light and dark mode
          ]}
        >
          {"Discover"}
        </Text>
        <Text
          style={[
            styles.wordsFooter, //style
            { color: isThemeDark ? "black" : "white" }, // toggle light and dark mode
          ]}
        >
          {"Matches"}
        </Text>
        <Text
          style={[
            styles.wordsFooter, //style
            { color: isThemeDark ? "black" : "white" }, // toggle light and dark mode
          ]}
        >
          {"DMs"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: "column",
    height: 95,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    //marginVertical: "0.75%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  centered: {
    alignContent: "center",
  },
  spacedImages: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  spacedWords: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  wordsFooter: {
    fontFamily: "Sydney-Bold", // 'Sydney' is the non-bold version
    fontSize: 12,
    marginBottom: "5%",
  },
  discoverIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    marginLeft: "1%",
  },
  matchesIcon: {
    width: 35,
    height: 35,
    paddingleft: "3%",
    resizeMode: "contain",
    marginLeft: "4%",
  },
  dmsIcon: {
    width: 35,
    height: 35,
    paddingleft: "3%",
    resizeMode: "contain",
  },
  // add more styles for other components!
});

export default Footer;

/* Boneyard

      <TouchableOpacity style={styles.centered}>
        <Image
          source={Icons.heart[isThemeDark ? "dark" : "light"]} // toggle light and dark mode
          style={styles.matchesIcon}
        />
        <Text style={[
            styles.wordsFooter, //style
            { color: isThemeDark ? "black" : "white" }, // toggle light and dark mode
          ]}
        >
          {"Discover"}</Text>
      </TouchableOpacity>

      TouchableOpacity style={styles.centered}>
        <Image
          source={Icons.discover}
          style={styles.discoverIcon}
        />
        <Text style={[styles.wordsFooter]}>
          {"Discover"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.centered}>
        <Image
          source={Icons.heart}
          style={styles.matchesIcon}
        />
        <Text style={[styles.wordsFooter]}>
          {"Macthes"}
        </Text>
      </TouchableOpacity>

      
      TouchableOpacity style={styles.centered}>
        <Image
          source={Icons.messages}
          style={styles.dmsIcon}
        />
        <Text style={[styles.wordsFooter]}>
          {"Dms"}
        </Text>
      </TouchableOpacity>


*/
