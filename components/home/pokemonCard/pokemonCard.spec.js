import { render } from "@testing-library/react-native";
import PokemonCard from ".";

describe("pokemonCard", () => {
  const mockPokemon = {
    name: "pikachu",
    id: 25,
    sprites: {
      front_default: "https://pokeapi.co/api/v2/pokemon/25.png",
    },
  };

  const setup = (pokemon) => {
    return render(<PokemonCard pokemon={pokemon} />);
  };

  it("should render pokemon card correctly", () => {
    const { getByTestId } = setup(mockPokemon);

    const pokemonCard = getByTestId("pokemon-card");

    expect(pokemonCard).toBeDefined();
  });

  it("should render pokemon image correctly", () => {
    const { getByTestId } = setup(mockPokemon);

    const pokemonImage = getByTestId("pokemon-image");

    expect(pokemonImage).toBeDefined();

    expect(pokemonImage.props.source).toMatchObject({
      uri: mockPokemon.sprites.front_default,
    });
  });

  it("should render pokemon name correctly", () => {
    const { getByText } = setup(mockPokemon);

    const pokemonName = getByText(mockPokemon.name);

    expect(pokemonName).toBeDefined();
  });

  it("should render pokemon number correctly", () => {
    const { getByText } = setup(mockPokemon);

    const pokemonNumber = getByText(`# ${mockPokemon.id}`);

    expect(pokemonNumber).toBeDefined();
  });
});
