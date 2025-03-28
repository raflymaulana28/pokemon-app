import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetail } from "../services/api";
import Layout from "../components/Layout";
interface Pokemon {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

function Detail() {
  const { id } = useParams();
  const [Pokemon, setPokemon] = useState<Pokemon | null>(null);
  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await getPokemonDetail(id as string);
      setPokemon(response);
    };
    fetchPokemon();
  }, [id]);
  return (
    <Layout>
      {Pokemon && (
        <div>
          <img src={Pokemon.sprites.front_default} alt={Pokemon.name} />
          <h1>{Pokemon.name}</h1>
          <p>Height: {Pokemon.height}</p>
          <p>Weight: {Pokemon.weight}</p>
          <h2>Types</h2>
          <ul>
            {Pokemon.types &&
              Pokemon.types.map(
                (item: {
                  type: {
                    name: string;
                  };
                }) => <li key={item.type.name}>{item.type.name}</li>
              )}
          </ul>
        </div>
      )}
    </Layout>
  );
}

export default Detail;
