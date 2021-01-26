import React, { useState } from "react";
import { View, Text } from "react-native";
import { Marker } from "react-native-maps";

const MarkerPoint = (props) => {
  const { coordinate, totalPrice, onPress, isSelected } = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          backgroundColor: isSelected ? "black" : "white",
          padding: 4,
          borderRadius: 20,
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            color: isSelected ? "white" : "black",
            fontWeight: "bold",
          }}
        >
          ${totalPrice}
        </Text>
      </View>
    </Marker>
  );
};
export default MarkerPoint;
