import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Icons, Themes } from "../../assets/Themes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Footer = () => {
  return (
    <View style={styles.navigationContainer}>
      <View style={styles.spacedImages}>
        <Image source={Icons.discover.dark} style={styles.discoverIcon} />
        <Image source={Icons.heart.dark} style={styles.messagesIcon} />
        <Image source={Icons.messages.dark} style={styles.dmsIcon} />
      </View>
      <View style={styles.spacedWords}>
        <Text style={styles.wordsFooter}>{"Discover"}</Text>
        <Text style={styles.wordsFooter}>{"Matches"}</Text>
        <Text style={styles.wordsFooter}>{"DMs"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: "column",
    backgroundColor: Themes.light.navigation,
    backgroundColor: "lightgreen",
    justifyContent: "space-around",
    alignItems: "center",
  },

  spacedImages: {
    flexDirection: "row",
    justifyContent: "spaced-around",
    alignContent: "center",
  },
  spacedWords: {
    flexDirection: "row",
    justifyContent: "spaced-around",
    alignContent: "center",
  },

  wordsFooter: {
    fontFamily: "Sydney-Bold", // 'Sydney' is the non-bold version
    fontSize: 12,
    color: "black",
  },
  discoverIcon: {
    height: 10,
    width: 10,
  },
  messagesIcon: {
    height: 10,
    width: 10,
  },
  dmsIcon: {
    height: 10,
    width: 10,
  },
  // add more styles for other components!
});

export default Footer;
