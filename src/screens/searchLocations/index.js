import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import config from "../../../config";
import styles from "./styles";
import AutocompleteList from "./autocompleteList";

const SearchLocationsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "#f15454" }}>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where are you headed?"
          onPress={(data, details = null) => {
            navigation.navigate("Guests");
            console.log(data, details);
          }}
          fetchDetails={true}
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
