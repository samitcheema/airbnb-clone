import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import config from "../../../config";
import searchesults from "../../../assets/data/searchData";
import styles from "./styles";
import AutocompleteList from "./autocompleteList";

const SearchLocationsScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <GooglePlacesAutocomplete
          placeholder="Where are you headed?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          suppressDefaultStyles
          renderRow={(item) => <AutocompleteList item={item} />}
          query={{
            key: config.API_KEY,
            language: "en",
          }}
        />
      </View>
    </View>
  );
};

export default SearchLocationsScreen;
