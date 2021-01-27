import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

const LodgingCarousel = (props) => {
  const data = props.data;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={{ uri: data.image }} />
        <View style={{ marginHorizontal: 10, flex: 1 }}>
          <Text style={styles.bedrooms}>
            {data.bed} bed {data.bedroom} bedroom
          </Text>

          <Text style={styles.description} numberOfLines={2}>
            {data.type}. {data.title}
          </Text>

          <Text style={styles.prices}>
            <Text style={styles.oldPrice}> ${data.oldPrice}</Text>
            <Text style={styles.newPrice}> ${data.newPrice}</Text>
            <Text>/night</Text>
          </Text>

          <Text style={styles.totalPrice}>${data.totalPrice} total</Text>
        </View>
      </View>
    </View>
  );
};

export default LodgingCarousel;
