import React, { useState, useCallback, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { useFetchPokemons } from "../../hooks/useFetchPokemons";
import { useDebounce } from "../../hooks/useDebounce";

import Searcher from "./searcher";
import PokemonCard from "./pokemonCard";
import Paginator from "./paginator";
import styles from "./styles";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);

  const router = useRouter();

  const clickItem = useCallback(
    (pokemon) => {
      router.push(`pokemon-detail/${pokemon.id}`);
    },
    [router]
  );

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { pokemons, loading, error } = useFetchPokemons(
    debouncedSearchTerm,
    page
  );

  const handleChange = useCallback((text) => {
    setSearchTerm(text);
  }, []);

  const handlePage = useCallback(
    (action) => {
      if (action === "next") {
        setPage(page + 1);
      } else {
        setPage(page - 1);
      }
    },
    [page]
  );

  useEffect(() => {
    if (pokemons.length < 10 && pokemons.length > 0) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }
  }, [isLastPage]);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffffff" },
          headerShadowVisible: false,
          headerTitle: "Listado de Pokemón",
        }}
      />
      <View style={styles.content}>
        {loading && pokemons.length > 0 ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <>
            <Searcher searchTerm={searchTerm} handleChange={handleChange} />
            {error.status && <Text>{error.message}</Text>}
            <FlatList
              data={pokemons}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => clickItem(item)}>
                    <PokemonCard pokemon={item} />
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.id}
              numColumns={2}
              style={styles.flatList}
              columnWrapperStyle={styles.flatListColumn}
            />
            {!debouncedSearchTerm.length > 0 && (
              <Paginator
                handlePage={handlePage}
                page={page}
                isLastPage={isLastPage || loading}
              />
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
