import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { COLORS } from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import { SecondaryButton } from "../components/Button";

const DetailsScreen = ({ navigation, route }) => {
  const { food: item } = route.params;

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1}}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 280,
          }}
        >
          <Image
            source={item.image}
            style={{ width: 250, height: 250, resizeMode: "contain" }}
          />
        </View>
        <View style={styles.detials}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: COLORS.white }}
            >
              {item.name}
            </Text>
            <View style={styles.iconContainer}>
              <Icon name="favorite-border" size={24} color={COLORS.primary} />
            </View>
          </View>
          <Text style={styles.textDetials}>
       
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga optio
            in dignissimos suscipit sint aliquam placeat qui consequuntur
            reiciendis, reprehenderit harum dolorem voluptas officia ullam
            veritatis et recusandae soluta itaque!
          </Text>
          <View style={{ marginVertical: 40 }}>
            <SecondaryButton title="Add To Cart" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  detials: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  textDetials: {
    marginTop: 10,
    lineHeight: 22,
    color: COLORS.white,
    fontSize: 16,
  },
});
