import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 100,
    fontWeight: "bold",
    color: "white",
    width: "70%",
    marginLeft: 20,
  },
  button: {
    backgroundColor: "white",
    marginTop: 10,
    marginLeft: 20,
    width: 200,
    height: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  searchBarButton: {
    backgroundColor: "white",
    width: Dimensions.get("screen").width - 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 20,
    zIndex: 100,
  },
  searchBarButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
