import PokemonDetailScreen from "../../components/pokemonDetail";

import { useSearchParams } from "expo-router";

const PokemonDetailIDScreen = () => {
  const params = useSearchParams();

  return <PokemonDetailScreen id={params.id} />;
};

export default PokemonDetailIDScreen;
