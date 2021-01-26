import React, { useStat } from "react";
import { View, Text } from "react-native";
import { Marker } from "react-native-maps";
import lodgingData from "../../../assets/data/lodgingData";

const MarkerPoint = (props) => {
  const { coordinate, totalPrice, onPress, isSelected } = props;
  return (
    <View>
      <Marker coordinate={coordinate} onPress={onPress}>
        <Text
          style={{
            backgroundColor: "white",
            color: "black",
            padding: 5,
            borderRadius: 15,
            borderWidth: 1,
            fontWeight: "bold",
          }}
        >
          ${totalPrice}
        </Text>
      </Marker>
    </View>
  );
};

export default MarkerPoint;
