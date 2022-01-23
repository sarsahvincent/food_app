import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { COLORS } from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton } from "../components/Button";

const BoardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text onPress={() => navigation.navigate("Home")}>
        BoardScreen Screen
      </Text> */}
      <View style={{ height: 400 }}>
        <Image
          source={require("../assets/home.png")}
          style={{ width: "100%", resizeMode: "contain", top: -150 }}
        />
      </View>
      <View>
        <View style={styles.textContainer}>
          <Text
            style={{ fontSize: 32, fontWeight: "bold", textAlign: "center" }}
          >
            Delicious Food
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              color: COLORS.grey,
              marginTop: 20,
            }}
          >
            We will help you find the best food and delicious foods !
          </Text>
        </View>
      </View>

      <View style={styles.indicatorContainer}>
        <View style={styles.currentIndicator}></View>
        <View style={styles.indicator}></View>
        <View style={styles.indicator}></View>
      </View>
      <View style={{marginHorizontal: 60, marginBottom: 30}}>
        <PrimaryButton
          onPress={() => navigation.navigate("Home")}
          title="Get Started"
        />
      </View>
    </SafeAreaView>
  );
};

export default BoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  textContainer: {
    paddingHorizontal: 50,
    paddingBottom: 40,
    justifyContent: "space-between",
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
});
