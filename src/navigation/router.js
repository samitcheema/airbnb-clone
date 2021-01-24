import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeBottomTabNavigation from "./homeBottomTabNavigation";
import SearchLocationsScreen from "./../screens/searchLocations/index";
import SearchResultsScreen from "./../screens/searchResults/index";
import GuestsScreen from "./../screens/guests/index";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen">
        <Stack.Screen
          name="Home"
          component={HomeBottomTabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Search Locations"
          component={SearchLocationsScreen}
          options={{
            headerTitleAlign: "center",
            title: "Search",
            headerShown: true,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#f15454",
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="Search Results"
          component={SearchResultsScreen}
          options={{
            headerTitleAlign: "center",
            title: "Results",
          }}
        />
        <Stack.Screen
          name="Guests"
          component={GuestsScreen}
          options={{ headerTitleAlign: "center", title: "Guests" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
