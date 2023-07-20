import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    padding: 10,
    borderRadius: 4,
    borderWidth: 2,
    width: 150,
    height: 180,
  },
  image: {
    width: 100,
    height: 100,
  },
  id: {
    fontSize: 14,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
