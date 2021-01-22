import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

const LodgingDetails = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: "https://samisbucket.s3.amazonaws.com/wallpaper.jpg" }}
      />
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

      <Text style={styles.description} numberOfLines={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}> $36</Text>
        <Text style={styles.newPrice}> $30</Text>
        <Text>/night</Text>
      </Text>

      <Text style={styles.totalPrice}>$200 total</Text>
    </View>
  );
};

export default LodgingDetails;
