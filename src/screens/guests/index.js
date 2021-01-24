import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const GuestsScreen = (props) => {
  const [adultValue, setAdultValue] = useState(0);
  const [childrenValue, setChildrenValue] = useState(0);
  const [infantValue, setInfantValue] = useState(0);

  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.rowContainer}>
        <View>
          <Text style={{ fontWeight: "bold" }}>Adult</Text>
          <Text style={{ color: "#8d8d8d" }}>Ages 13 or above</Text>
        </View>
        <View style={styles.viewCustom}>
          <Pressable
            onPress={() => setAdultValue(Math.max(0, adultValue - 1))}
            style={styles.button}
          >
            <Text style={styles.plusMinus}>-</Text>
          </Pressable>
          <Text style={{ marginHorizontal: 15 }}>{adultValue}</Text>
          <Pressable
            onPress={() => setAdultValue(adultValue + 1)}
            style={styles.button}
          >
            <Text style={styles.plusMinus}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View>
          <Text style={{ fontWeight: "bold" }}>Children</Text>
          <Text style={{ color: "#8d8d8d" }}>Ages 2-12</Text>
        </View>
        <View style={styles.viewCustom}>
          <Pressable
            onPress={() => setChildrenValue(Math.max(0, childrenValue - 1))}
            style={styles.button}
          >
            <Text style={styles.plusMinus}>-</Text>
          </Pressable>
          <Text style={{ marginHorizontal: 15 }}>{childrenValue}</Text>
          <Pressable
            onPress={() => setChildrenValue(Math.max(0, childrenValue + 1))}
            style={styles.button}
          >
            <Text style={styles.plusMinus}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.rowContainer}>
        <View>
          <Text style={{ fontWeight: "bold" }}>Infants</Text>
          <Text style={{ color: "#8d8d8d" }}>Under 2</Text>
        </View>
        <View style={styles.viewCustom}>
          <Pressable
            onPress={() => setInfantValue(Math.max(0, infantValue - 1))}
            style={styles.button}
          >
            <Text style={styles.plusMinus}>-</Text>
          </Pressable>
          <Text style={{ marginHorizontal: 15 }}>{infantValue}</Text>
          <Pressable
            onPress={() => setInfantValue(Math.max(0, infantValue + 1))}
            style={styles.button}
          >
            <Text style={styles.plusMinus}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Pressable
          style={styles.bottomButton}
          onPress={() =>
            navigation.navigate("Home", {
              screen: "Explore",
              params: { screen: "Search Results" },
            })
          }
        >
          <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
            Search
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestsScreen;
