import { createSlice } from "@reduxjs/toolkit";
interface Pokemon {
  name: string;
}

interface PokemonState {
  pokemons: Pokemon[];
  loading: boolean;
  allPokemons: Pokemon[];
}

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemons: [] as Pokemon[],
    loading: false,
    allPokemons: [] as Pokemon[],
  } as PokemonState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
      state.allPokemons = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    searchPokemon: (state, action) => {
      const filtered = state.allPokemons.filter((pokemon: Pokemon) => {
        return pokemon.name.includes(action.payload);
      });
      state.pokemons = filtered || [];
    },
    sortingPokemon: (state, action) => {
      let sorted = [] as Pokemon[];
      if (action.payload === "asc") {
        sorted = state.pokemons.sort((a: Pokemon, b: Pokemon) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (action.payload === "desc") {
        sorted = state.pokemons.sort((a: Pokemon, b: Pokemon) => {
          return b.name.localeCompare(a.name);
        });
      }

      state.pokemons = sorted;
    },
  },
});

export const { setPokemons, setLoading, searchPokemon, sortingPokemon } =
  pokemonSlice.actions;
export const selectPokemons = (state: { pokemons: Pokemon[] }) =>
  state.pokemons;
export const selectLoading = (state: { loading: boolean }) => state.loading;
export default pokemonSlice.reducer;
