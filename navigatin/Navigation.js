import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import MyTabs from "./ScreenNavigator";
import Colors from '../constants/colors'

const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MyTabs />
    </NavigationContainer>
  );
};

export default Navigation;
