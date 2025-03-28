import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
interface Params {
  limit: number;
  offset: number;
}
export const getPokemonList = async (params: Params) => {
  const response = await axiosInstance.get("/pokemon", {
    params,
  });
  return response.data;
};

export const getPokemonDetail = async (id: string) => {
  const response = await axiosInstance.get(`/pokemon/${id}`);
  return response.data;
};
