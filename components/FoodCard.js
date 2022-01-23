import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";
const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;
import { Octicons, MaterialIcons } from "@expo/vector-icons";

const FoodCard = ({ food, navigation }) => {

  return (
    <TouchableHighlight
      underlayColor={COLORS.white}
      TouchableOpacity={0.9}
      onPress={() =>
        navigation.navigate("DetailsScreen", { food, title: food.name })
      }
    >
      <View style={styles.card}>
        <View style={{ alignItems: "center", top: -45 }}>
          <Image
            source={food.image}
            style={{
              height: 120,
              width: 120,
              borderRadius: 30,
              resizeMode: "contain",
            }}
          />
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{food.name}</Text>
          <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
            {food.ingredients}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{food.price}</Text>
          <View style={styles.addToCartBtn}>
            <MaterialIcons name="add" size={24} color={COLORS.white} />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
