import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { IPokemon, IPokemonSpecies } from 'pokeapi-typescript';
import {
  View,
} from 'react-native';
import { Text } from 'react-native-svg';
import { white } from 'tailwindcss/colors';
import { getPokemonByName, getPokemonSpeciesByName } from '../../api/pokemonApi';
import getPokemonColor from '../../utils/get-pokemon-color';
import getPokemonImageUrl from '../../utils/get-pokemon-image-url';

import PokemonDetails from './components/pokemon-details';
import PokemonImage from './components/pokemon-image';

export default function DetailsScreen({ route }: { route: any }): JSX.Element {

  console.log(route.params);

  const { name } = route.params;

  const pokemonResponse = useQuery(['pokemon', name], () => getPokemonByName(name))
  const pokemonSpeciesResponse = useQuery(['pokemon', name], () => getPokemonSpeciesByName(name), {
    enabled: pokemonResponse.data ? true : false
  })


  if (pokemonResponse.isLoading) {
    return <Text>Loading...</Text>
  }

  if (pokemonResponse.isError) {
    return <Text>Error</Text>
  }
  if (pokemonSpeciesResponse.isLoading) {
    return <Text>Loading...</Text>
  }

  if (pokemonSpeciesResponse.isError) {
    return <Text>Error</Text>
  }

  console.log(pokemonSpeciesResponse.data);


  if (pokemonSpeciesResponse.isSuccess) {

    return (
      <View
        style={{
          backgroundColor: getPokemonColor(pokemonSpeciesResponse.data.color ? pokemonSpeciesResponse.data.color.name : 'white')
        }}
        className='flex h-full pt-10'>
        <PokemonImage src={getPokemonImageUrl(JSON.stringify(pokemonResponse.data?.id))} />
        <PokemonDetails pokemon={pokemonResponse.data as IPokemon} pokemonSpecies={pokemonSpeciesResponse.data as IPokemonSpecies} />
      </View>
    );
  }else{
    return <View>

    </View>
  }
}