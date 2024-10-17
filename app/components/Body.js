import { View, StyleSheet, Image, Button, Text } from "react-native";
import Profiles from "../../assets/Profiles";

import Icons from "../../assets/Icons";

const Body = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstPart}>
        <View style={styles.rounded}>
          <Text style={styles.words}>{"Me and my best friend"}</Text>
          <Image source={Profiles.landay.image} style={styles.image} />
        </View>
      </View>
      <View style={styles.secondPart}>
        <View style={styles.rounded}>
          <Text style={styles.words}>{"Me hottest take"}</Text>
          <View style={styles.adjustLook}>
            <Image source={Icons.player.light} style={styles.playerIcon} />
            <Image source={Icons.audioWave.dark} style={styles.audioIcon} />
          </View>
        </View>
      </View>
    </View>
  );
};

// <Button source={Icons.heart_dark} style={styles.heartIcon} />

const styles = StyleSheet.create({
  container: {
    height: "70%",
    //flex: "400%",
    backgroundColor: "lightpink",
    justifyContent: "top",
    alignItems: "top",
  },
  image: {
    height: "75%", // feel free to adjust this!
    width: "75%",
    aspectRatio: 1,
    justifyContent: "center",
    borderRadius: 10,
  },
  // add more styles for other components!
  firstPart: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "yellow",
    borderRadius: 10,
    borderColor: "lightgrey",
    borderWidth: 2,
  },
  rounded: {
    borderRadius: 10,
  },

  words: {
    fontFamily: "Sydney-Bold", // 'Sydney' is the non-bold version
    fontSize: 20,
    color: "black",
    marginTop: "4%",
    marginBottom: "4%",
    marginLeft: "5%",
    textAlign: "start",
    //flex: "100%",
  },

  heartIcon: {
    fontSize: 24,
    justifyContent: "flex-end",
    alignContent: "flex-end",
  },

  secondPart: {
    height: "20%",
    width: "430%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 10,
  },

  adjustLook: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  playerIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },

  audioIcon: {
    width: 50,
    height: 50,
  },
});

export default Body;
