import React, { useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import styles from "./styles";
import searchResults from "../../../assets/data/searchData";
import Entypo from "react-native-vector-icons/Entypo";

const SearchLocationsScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
          <View style={styles.rowContainer}>
            <View style={styles.iconContainer}>
              <Entypo name={"location-pin"} size={30} />
            </View>
            <Text style={styles.locationsText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchLocationsScreen;
