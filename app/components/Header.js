import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Button,
  Touchable,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from "react-native";

import React, { useState } from "react";

/* Files called index.js are treated specially by Node.js.
 * You can import them by giving the name of the folder the index.js
 * is located in! */

import Icons from "../../assets/Icons";

/* This handy trick grabs the width and height of the device's window,
 * which lets you set the sizes of your UI elements relative to the
 * dimensions of the device. */

import Profiles from "../../assets/Profiles"; // Assuming you're using Profiles here

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = ({ isThemeDark, setThemeDark }) => {
  const changeTheme = () => {
    setThemeDark(!isThemeDark); //'!' acts as an operator to toggle between light and dark modes
    alert("Upgrade to Crinj Premium for more Features like this!!");
  };

  return (
    <SafeAreaView>
      <View
        style={[
          //                                      // Background — like Container
          styles.header,
          { backgroundColor: isThemeDark ? "#121416" : "#F3F3F3" }, // toggle light and dark mode
        ]}
      >
        <View>
          <Text // Name
            style={[
              styles.name, // style
              { color: isThemeDark ? "white" : "black" }, // toggle light and dark mode
            ]}
          >
            {Profiles.landay.name}
          </Text>
          <Text // Pronouns
            style={[
              styles.pronouns, // style
              { color: isThemeDark ? "white" : "black" }, // toggle light and dark mode
            ]}
          >
            {Profiles.landay.pronouns}
          </Text>
        </View>

        <View>
          <Pressable onPress={changeTheme}>
            <Image // COLOR SCHEME TOGGLE
              source={isThemeDark ? Icons.moon : Icons.sun} // toggle light and dark mode
              style={styles.headerIcon} // style
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerIcon: {
    height: windowWidth * 0.1,
    width: windowWidth * 0.1,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 10,
  },
  name: {
    // We've loaded this font for you in App.js
    fontFamily: "Sydney-Bold",
    fontSize: 32,
  },
  pronouns: {
    fontFamily: "Sydney", // 'Sydney' is the non-bold version
    fontSize: 16,
    //flexDirection: "column",        // Change the orientation to column for this item
    //justifyContent: "flex-start",
  },
});

export default Header;

/* Boneyard






*/
