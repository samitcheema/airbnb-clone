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
import LodgingDetails from "./src/components/lodgingDetails/index";

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeScreen />
          <LodgingDetails />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
