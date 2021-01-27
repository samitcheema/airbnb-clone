import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 40,
  },

  innerContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    width: "90%",
    marginHorizontal: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },

  image: {
    height: "100%",
    aspectRatio: 1,
  },

  bedrooms: {
    color: "#7a7474",
    fontSize: 14,
    marginVertical: 10,
  },

  description: {
    marginVertical: 10,
    fontSize: 14,
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
