import React from "react";
import { useFetchPokemons } from "../../hooks/useFetchPokemons";
import { Stack } from "expo-router";
import {
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  Text,
  ScrollView,
} from "react-native";
import styles from "./styles";

const PokemonDetailScreen = ({ id }) => {
  const { pokemons, loading, error } = useFetchPokemons(null, null, null, id);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffffff" },
          headerShadowVisible: false,
          headerTitle: "Detalle de Pokemón",
        }}
      />
      {loading || pokemons?.length === 0 ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <>
          {error.status && <Text>{error.message}</Text>}
          <View style={styles.contentContainer}>
            <View style={styles.cardContainer}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.pokemonImage}
                  source={{ uri: pokemons[0].sprites.front_default }}
                />
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.name}># {pokemons[0].id}</Text>
                <Text style={styles.name}>{pokemons[0].name}</Text>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.titleText}>Types</Text>
                <View style={styles.typeContainer}>
                  {pokemons[0].types.map((type) => (
                    <Text style={styles.typeText}>{type.type.name}</Text>
                  ))}
                </View>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.titleText}>Peso</Text>
                <Text>{pokemons[0].weight} Kg.</Text>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.titleText}>Sprites</Text>
                <View style={styles.spritesContainer}>
                  <FlatList
                    data={Object.keys(pokemons[0].sprites)}
                    renderItem={({ item }) => {
                      const spriteUri = pokemons[0]?.sprites[item];
                      return spriteUri && typeof spriteUri === "string" ? (
                        <Image
                          style={styles.spriteImage}
                          source={{ uri: spriteUri }}
                        />
                      ) : null;
                    }}
                    keyExtractor={(item) => item}
                    horizontal
                  />
                </View>
              </View>
              <View style={styles.itemContainer}>
                <Text style={styles.titleText}>Movimientos</Text>
                <ScrollView horizontal={true} style={styles.movesContainer}>
                  {pokemons[0].moves.map((move) => (
                    <Text style={styles.moveText}>{move.move.name}</Text>
                  ))}
                </ScrollView>
              </View>
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default PokemonDetailScreen;
