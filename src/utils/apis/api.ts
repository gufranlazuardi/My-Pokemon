import axiosWithConfig from "../axiosWithConfig";
import { Response } from "../types/api";
import { Pokemon, Species } from "./types";

export const getPokemon = async () => {
  try {
    const response = await axiosWithConfig.get(`/pokemon/`);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getPokemonDetail = async (name: string) => {
  try {
    const response = await axiosWithConfig.get(`/pokemon/${name}`);

    return response.data as Pokemon;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getPokemonSpecies = async (id: number) => {
  try {
    const response = await axiosWithConfig.get(`pokemon-species/${id}`);

    return response.data as Species;
  } catch (error) {}
};
