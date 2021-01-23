import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },

  viewCustom: {
    flexDirection: "row",
    alignItems: "center",
  },

  button: {
    borderWidth: 1,
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#7d7d7d",
  },
});

export default styles;
