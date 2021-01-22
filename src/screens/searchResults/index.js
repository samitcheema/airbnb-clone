import React from "react";
import { View, FlatList } from "react-native";
import Lodging from "./../../components/lodging/";

import lodgingData from "../../../assets/data/lodgingData";

const SearchResultsScreen = () => {
  return (
    <View>
      <FlatList
        data={lodgingData}
        renderItem={({ item }) => <Lodging data={item} />}
      />
    </View>
  );
};

export default SearchResultsScreen;
