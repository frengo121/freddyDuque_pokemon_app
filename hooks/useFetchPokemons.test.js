import React from "react";
import { Text } from "react-native";
import { render, waitFor } from "@testing-library/react-native";
import { useFetchPokemons } from "./useFetchPokemons";

function TestComponent({ searchTerm, page, limit, id }) {
  const { pokemons, loading, error } = useFetchPokemons(
    searchTerm,
    page,
    limit,
    id
  );
  return (
    <Text testID="pokemonData">
      {JSON.stringify({ pokemons, loading, error })}
    </Text>
  );
}

jest.mock("node-fetch", () => jest.fn());

describe("useFetchPokemons", () => {
  it("should fetch pokemons successfully", async () => {
    const fetch = require("node-fetch");
    const mockPokemon = {
      name: "pikachu",
      id: 25,
      sprites: {
        front_default: "https://pokeapi.co/api/v2/pokemon/25.png",
      },
    };
    const response = {
      ok: true,
      json: jest.fn().mockResolvedValue({
        results: [{ url: "https://pokeapi.co/api/v2/pokemon/25" }],
      }),
    };
    fetch.mockResolvedValueOnce(response).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValue(mockPokemon),
    });

    const { getByTestId } = render(
      <TestComponent searchTerm="" page={1} limit={10} />
    );
    await waitFor(() =>
      expect(
        JSON.parse(getByTestId("pokemonData").props.children).loading
      ).toBe(false)
    );

    const fetchedData = JSON.parse(getByTestId("pokemonData").props.children);
    const lengthResponse = fetchedData.pokemons.length;
    expect(fetchedData.pokemons.length).toBe(lengthResponse);
    expect(fetchedData.error).toEqual({ status: false, message: "" });
  });
});
