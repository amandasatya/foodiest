import { Text, View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import React, { useLayoutEffect } from "react";
// import chef2 from "../../assets/images"

const chef1 = require("../../assets/images/chef2.jpg");
export default function IntroLayout() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image source={chef1} style={styles.image} />
      </View>
      <View style={styles.secondDiv}>
        <View style={styles.title1container}>
          <Text style={styles.title}>Wanna cook</Text>
          <Text style={styles.title}>
            Something <Text style={styles.highlight}>Delicious?</Text>
          </Text>
        </View>
        <View style={styles.title2container}>
          <Text style={styles.title2}>Let's try our best recipe</Text>
          <Text style={styles.title2}>simple to made and tasty</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // // justifyContent: "center",
    // padding: 30,
    // backgroundColor: "white",
  },
  container2: {
    flex: 1,
    alignItems: "center",
    // // justifyContent: "center",
    padding: 40,
    paddingBottom: 20,
    // backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
  title1container: {
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title2container: {
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title2: {
    fontSize: 20,
    fontWeight: "medium",
    color: "black",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: "cover",
    alignItems: "center",
  },
  secondDiv: {
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    padding: 10,
    paddingTop: 60,
    backgroundColor: "white",
    alignItems: "center",
    position: "absolute",
    top: "45%",
    height: "100%",
    width: "107%",
  },
  highlight: {
    color: "blue",
  },
});
