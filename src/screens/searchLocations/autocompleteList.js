import React from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";

import styles from "./styles";

const AutocompleteList = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.rowContainer}>
      <View style={styles.iconContainer}>
        <Entypo name={"location-pin"} size={30} />
      </View>
      <Text style={styles.locationsText}>{item.description}</Text>
    </View>
  );
};

export default AutocompleteList;
