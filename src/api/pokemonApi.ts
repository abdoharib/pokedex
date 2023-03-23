import { INamedApiResourceList, IPokemon, IPokemonSpecies, ITypePokemon } from 'pokeapi-typescript';
import axios from '../utils/axios'

export const getPokemonByName = async (name:string) => {
    const response = await axios.get<IPokemon>(`pokemon/${name}`);
    return response.data;
}

export const getPokemonSpeciesByName = async (name:string) => {
    const response = await axios.get<IPokemonSpecies>(`pokemon-species/${name}`);
    return response.data;
}


export const getAllPokemons = async ({ pageParam = 0 }) => {
    // console.log(pageParam);
    
    const response = await axios.get<INamedApiResourceList<IPokemon>>(`pokemon?limit=${10}&offset=${pageParam}`);
    return response.data;
}

