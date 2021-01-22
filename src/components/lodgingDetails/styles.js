import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
  },

  bedrooms: {
    color: "#7a7474",
    fontSize: 16,
    marginVertical: 10,
  },
  description: {
    fontSize: 18,
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
