/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Layout from "../components/Layout";
import PokemonCard from "../components/PokemonCard";
import SearchBar from "../components/SearchBar";
import { getPokemonList } from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLoading,
  selectPokemons,
  setLoading,
  setPokemons,
} from "../reducers/slice";
import SortButton from "../components/SortButton";

interface Pokemon {
  name: string;
}

function Home() {
  const pokemons = useSelector(selectPokemons);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const fetchPokemons = async () => {
    dispatch(setLoading(true));
    const params = {
      limit: 10,
      offset: 0,
    };
    const response = await getPokemonList(params);
    dispatch(setPokemons(response.results));
    dispatch(setLoading(false));
  };
  useEffect(() => {
    fetchPokemons();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <div className="flex flex-col justify-between items-start p-4">
        <SearchBar />
        <SortButton />
      </div>
      <div>
        {pokemons &&
          pokemons?.map((item: Pokemon) => (
            <PokemonCard key={item.name} data={item} />
          ))}
      </div>
    </Layout>
  );
}

export default Home;
