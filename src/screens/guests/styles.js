import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },

  viewCustom: {
    flexDirection: "row",
    alignItems: "center",
  },

  button: {
    borderWidth: 1,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#7d7d7d",
  },

  plusMinus: {
    fontSize: 18,
  },

  bottomButton: {
    height: 50,
    width: "80%",
    backgroundColor: "#f15454",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    borderRadius: 10,
    margin: 20,
  },

  bottomContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: "100%",
  },
});

export default styles;
