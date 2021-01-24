import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchResultsScreen from "./../screens/searchResults/index";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTopTabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#f15454",
        indicatorStyle: { backgroundColor: "#f15454" },
      }}
    >
      <Tab.Screen name="Search Results" component={SearchResultsScreen} />
      <Tab.Screen name="Map" component={SearchResultsScreen} />
    </Tab.Navigator>
  );
};

export default SearchResultsTopTabNavigation;
