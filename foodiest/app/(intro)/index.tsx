import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const chef1 = require("../../assets/images/chef.jpg");

export default function IntroLayout() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={chef1} style={styles.image} resizeMode="cover" />
      </View>
      <Text style={styles.title}>test 123</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    // padding: wp("4%"), // Responsive padding
  },
  imageContainer: {
    width: wp("100%"), // Responsive width
    aspectRatio: 1, // Example aspect ratio (adjust as needed)
    marginBottom: hp("3%"), // Responsive margin
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: wp("5%"), // Responsive font size
    fontWeight: "bold",
    textAlign: "center",
  },
});
