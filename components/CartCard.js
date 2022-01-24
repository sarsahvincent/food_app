import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Octicons,
  MaterialIcons,
} from "@expo/vector-icons";

const CartCard = ({ item }) => {
  return (
    <View style={styles.cartCard}>
      <Image
        source={item.image}
        style={{ height: 90, width: 90, resizeMode: "contain" }}
      />
      <View
        style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
        <Text style={{ color: COLORS.grey, fontSize: 13 }}>{item.name}</Text>
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>$ {item.price}</Text>
      </View>
      <View style={{ marginRight: 20, alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>3</Text>
        <View style={styles.actionBtn}>
          <MaterialIcons name="remove" size={24} color="white" />
          <MaterialIcons name="add" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
