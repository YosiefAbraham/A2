import { View, StyleSheet, Image, Button } from "react-native";
import Profiles from "../../assets/Profiles";

const Body = () => {
  return (
    <View style={styles.container}>
      <Image source={Profiles.landay.image} style={styles.image} />
      <Button title={"Find Love Now"} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // fill this in!
  },
  image: {
    height: 300, // feel free to adjust this!
    aspectRatio: 1,
  },
  // add more styles for other components!
});

export default Body;
