import React from "react";
import { View, Image, Text, FlatList } from "react-native";
import styles from "./styles";

const Lodging = (props) => {
  const data = props.data;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image }} />
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
  );
};

export default Lodging;
