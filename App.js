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
import LodgingDetails from "./src/components/lodging/index";

import lodgingData from "./assets/data/lodgingData";

const firstPost = lodgingData[0];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeScreen />
          <LodgingDetails data={firstPost} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
