import { useState, useEffect } from "react";

import { View, Text, Image } from "react-native";
import { styles } from "./styles";

const COLORS = [
  {
    bg: "#bfcfda",
    border: "#7e8b96",
  },
  {
    bg: "#76dace",
    border: "#07af9f",
  },
  {
    bg: "#fbc098",
    border: "#eb863c",
  },
  {
    bg: "#f59cab",
    border: "#d74761",
  },
];

const PokemonCard = ({ pokemon }) => {
  const [bgColor, setBgColor] = useState(0);

  const { name, id, sprites } = pokemon;

  const getDinamicBgCard = () => {
    if (id % 4 === 0) {
      setBgColor(0);
    } else {
      setBgColor(id % 4);
    }
  };

  useEffect(() => {
    getDinamicBgCard();
  }, []);

  return (
    <View
      testID="pokemon-card"
      style={{
        ...styles.container,
        backgroundColor: COLORS[bgColor]?.bg || "#ffffff",
        borderColor: COLORS[bgColor]?.border || "#cccccc",
      }}
    >
      <Image
        testID="pokemon-image"
        style={styles.image}
        source={{ uri: sprites.front_default }}
      />
      <Text style={styles.id}># {id}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default PokemonCard;
