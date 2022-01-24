import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { foods } from "../constants/food";
import CartCard from "../components/CartCard";
import { COLORS } from "../constants/colors";
import {PrimaryButton} from "../components/Button";
const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={foods}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                Total Price
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>$50</Text>
            </View>
            <View>
              <PrimaryButton title="CHECKOUT" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
});
