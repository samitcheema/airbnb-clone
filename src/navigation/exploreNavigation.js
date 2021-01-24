import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./../screens/home/index";
import SearchResultsTopTabNavigation from "./searchResultsTopTabNavigation";

const Stack = createStackNavigator();

const ExploreNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search Results"
        component={SearchResultsTopTabNavigation}
        options={{ title: "Where are you headed?" }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigation;
