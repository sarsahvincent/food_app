import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Octicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { categories } from "../constants/categories";
import { foods } from "../constants/food";
import FoodCard from "../components/FoodCard";

//<MaterialIcons name="tune" size={24} color="black" />

const HomeScreen = ({ navigation }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryListContainer}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.primary
                    : COLORS.secondary,
                ...styles.categoryBtn,
              }}
            >
              <View style={styles.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{ width: 35, height: 35, resizeMode: "cover" }}
                />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontWeight: "bold",
                  fontSize: 16,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.primary,
                }}
              >
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const Card = () => {
    return <View style={styles.card}></View>;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 28 }}>Hello, </Text>
            <Text style={{ fontSize: 28, fontWeight: "bold", marginLeft: 10 }}>
              Vincent{" "}
            </Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 22, color: COLORS.grey }}>
            What do you want to eat?
          </Text>
        </View>
        <Image
          source={require("../assets/profile.jpg")}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        />
      </View>
      <View
        style={{ marginTop: 40, flexDirection: "row", paddingHorizontal: 20 }}
      >
        <View style={styles.inputContainer}>
          <Octicons
            name="search"
            size={24}
            color="black"
            style={{ marginRight: 10 }}
          />
          <TextInput
            style={{ fontSize: 18, flex: 1 }}
            placeholder="Search for food"
          />
        </View>
        <View style={styles.sortBtn}>
          <MaterialIcons name="tune" size={24} color={COLORS.white} />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
       keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({ item }) => (
          <FoodCard food={item} title={item.name} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    marginTop: 20,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: COLORS.light,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryListContainer: {
    paddingHorizontal: 30,
    alignItems: "center",
    paddingVertical: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 30,
    alignItems: "center",
    borderRadius: 30,
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
