import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
    itemAlign: "center",
    gap: 10,
  },
  cardContainer: {
    padding: 16,
    borderColor: "#7159e9",
    backgroundColor: "#b6aaff",
    borderWidth: 2,
    borderRadius: 10,
    height: "100%",
    justifyContent: "space-between",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  pokemonImage: {
    width: 200,
    height: 200,
  },
  itemContainer: {
    gap: 5,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
  },
  typeContainer: {
    flexDirection: "row",
    gap: 10,
  },
  typeText: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  spritesContainer: {
    flexDirection: "row",
    gap: 10,
  },
  spriteImage: {
    width: 50,
    height: 50,
  },
  movesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "justify",
  },
  moveText: {
    marginRight: 5,
    flexShrink: 1,
  },
});
