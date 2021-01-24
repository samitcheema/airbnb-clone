import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  searchInput: {
    fontSize: 18,
  },

  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  iconContainer: {
    backgroundColor: "lightgrey",
    borderRadius: 10,
    margin: 10,
  },
  locationsText: {
    fontSize: 12,
  },
});

export default styles;
