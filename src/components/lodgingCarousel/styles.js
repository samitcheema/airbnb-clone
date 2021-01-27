import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
  },

  innerContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    width: "85%",
    marginHorizontal: 5,
  },

  image: {
    height: "100%",
    aspectRatio: 1,
  },

  bedrooms: {
    color: "#7a7474",
    fontSize: 16,
    marginVertical: 10,
  },

  description: {
    fontSize: 16,
    lineHeight: 26,
  },

  prices: {
    fontSize: 18,
  },

  oldPrice: {
    fontSize: 18,
    color: "#7a7474",
    textDecorationLine: "line-through",
  },

  newPrice: {
    fontWeight: "bold",
  },

  totalPrice: {
    textDecorationLine: "underline",
  },
});

export default styles;
