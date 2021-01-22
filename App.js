import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

import HomeScreen from "./src/screens/home";
import SearchResultsScreen from "./src/screens/searchResults";
import SearchLocationsScreen from "./src/screens/searchLocations";

import Lodging from "./src/components/lodging/index";

import lodgingData from "./assets/data/lodgingData";

const firstPost = lodgingData[0];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <HomeScreen /> */}
          {/* <Lodging data={firstPost} /> */}
          {/* <SearchResultsScreen /> */}
          <SearchLocationsScreen />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
