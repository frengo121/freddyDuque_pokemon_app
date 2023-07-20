import { useEffect, useCallback, useState } from "react";

export const useFetchPokemons = (
  searchTerm,
  page = 1,
  limit = 10,
  id = null
) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const offset = (page - 1) * limit;

  const getPokemons = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      if (response.ok) {
        const { results } = await response.json();
        const pokemons = await Promise.all(
          results.map(async ({ url }) => {
            const response = await fetch(url);
            return response.json();
          })
        );
        setPokemons(pokemons);
        setError({ status: false, message: "" });
      } else {
        throw new Error();
      }
    } catch (error) {
      setError({
        status: true,
        message: "Ocurrío un error al obtener los pokemones.",
      });
      setPokemons([]);
    }
    setLoading(false);
  }, [limit, offset]);

  const getPokemonById = useCallback(async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (response.ok) {
        const pokemon = await response.json();
        setPokemons([pokemon]);
        setError({ status: false, message: "" });
      } else {
        throw new Error();
      }
    } catch (error) {
      setError({
        status: true,
        message: "Pokemon no encontrado.",
      });
      setPokemons([]);
    }
    setLoading(false);
  }, []);

  const getPokemonsBySearch = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
      );
      if (response.ok) {
        const pokemon = await response.json();
        setPokemons([pokemon]);
        setError({ status: false, message: "" });
      } else {
        throw new Error();
      }
    } catch (error) {
      setError({
        status: true,
        message: "Pokemon no encontrado.",
      });
      setPokemons([]);
    }
    setLoading(false);
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm && searchTerm.length > 0) {
      getPokemonsBySearch();
    } else if (id) {
      getPokemonById(id);
    } else {
      getPokemons();
    }
  }, [getPokemons, getPokemonsBySearch, searchTerm]);

  return { pokemons, loading, error };
};
