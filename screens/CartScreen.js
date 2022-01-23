import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const CartScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}></View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
});
