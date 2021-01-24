import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import HomeScreen from "./../screens/home/index";
import GuestsScreen from "./../screens/guests/index";
import SearchLocationsScreen from "./../screens/searchLocations/index";
import SearchResultsScreen from "./../screens/searchResults/index";
import ExploreNavigation from "./exploreNavigation";

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigation = () => {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: "#f15454" }}>
      <Tab.Screen
        name="Explore"
        component={ExploreNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Airbnb"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="airbnb" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="heart-alt" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigation;
