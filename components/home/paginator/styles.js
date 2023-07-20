import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#0389e0",
    padding: 10,
    borderRadius: 4,
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
    width: 120,
    display: "flex",
    flexDirection: "row",
  },
  buttonDisabled: {
    backgroundColor: "#cccccc",
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
