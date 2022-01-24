import * as React from "react";
import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Octicons,
  MaterialIcons,
} from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import BoardScreen from "../screens/BoardScreen";
import CartScreen from "../screens/CartScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import { COLORS } from "../constants/colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/UI/HeaderButton";

const Tab = createBottomTabNavigator();

/* 
<MaterialIcons name="favorite" size={24} color="black" />
<FontAwesome name="shopping-cart" size={24} color="black" />
<MaterialCommunityIcons name="wallet-giftcard" size={24} color="black" />
<Octicons name="search" size={24} color="black" />
<MaterialIcons name="tune" size={24} color="black" />
<MaterialIcons name="local-mall" size={24} color="black" />
*/
const Stack = createNativeStackNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="local-mall" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <View style={styles.searchIcon}>
              <Octicons name="search" size={28} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="gift"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Menu"
                iconName="arrow-back-ios"
                onPress={() => navigation.navigate("HomeScreen")}
                color="black"
              />
            </HeaderButtons>
          ),
          tabBarLabel: "Carts",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="shopping-cart" size={28} color={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="BoardScreen"
    >
      <Stack.Screen name="BoardScreen" component={BoardScreen} />
      <Stack.Screen name="Home" component={BottomNavigator} />
      <Stack.Screen
        name="DetailsScreen"
        options={({ route, navigation }) => ({
          title: route.params.title,
          headerShown: true,
        })}
        /*  options={{
          headerLabel: "Home",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Icon name="arrow-back-ios" size={24} />
          ),
        }} */
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  searchIcon: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 30,
    top: -25,
    elevation: 5,
  },
});
export default MyStack;
