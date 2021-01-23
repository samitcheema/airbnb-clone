import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Fontisto from "react-native-vector-icons/Fontisto";

import styles from "./styles";

const HomeScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        source={require("../../../assets/images/wallpaper.jpg")}
        style={styles.image}
      >
        <Pressable
          style={styles.searchBarButton}
          onPress={() => navigation.navigate("Search Locations")}
        >
          <Fontisto name="search" size={25} color={"#f15454"} />
          <Text style={styles.searchBarButtonText}>Where are you headed?</Text>
        </Pressable>

        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn("Explore Btn clicked")}
        >
          <Text style={styles.buttonText}>Explore nearby places</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
