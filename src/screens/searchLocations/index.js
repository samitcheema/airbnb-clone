import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Entypo from "react-native-vector-icons/Entypo";

import styles from "./styles";
import searchResults from "../../../assets/data/searchData";

const SearchLocationsScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Where are you headed?"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <Pressable
            style={styles.rowContainer}
            onPress={() => navigation.navigate("Guests")}
          >
            <View style={styles.iconContainer}>
              <Entypo name={"location-pin"} size={30} />
            </View>
            <Text style={styles.locationsText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default SearchLocationsScreen;
