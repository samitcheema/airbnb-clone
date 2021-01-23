import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const GuestsScreen = (props) => {
  return (
    <View>
      <View style={styles.rowContainer}>
        <View>
          <Text style={{ fontWeight: "bold" }}>Adult</Text>
          <Text style={{ color: "#8d8d8d" }}>Ages 13 or above</Text>
        </View>
        <View style={styles.viewCustom}>
          <Pressable
            onPress={() => console.warn("- clicked")}
            style={styles.button}
          >
            <Text>-</Text>
          </Pressable>
          <Text>0</Text>
          <Pressable
            onPress={() => console.warn("+ clicked")}
            style={styles.button}
          >
            <Text>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GuestsScreen;
