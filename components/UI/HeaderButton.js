import React from "react";
import { Platform } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";
//import Colors from "../../constants/Colors";

const CartCard = () => {
  return <View></View>;
};
const CustomHeaderButton = (props) => {
  return <HeaderButton IconComponent={Icon} iconSize={23} {...props} />;
};

export default CustomHeaderButton;

const styles = StyleSheet.create({});
