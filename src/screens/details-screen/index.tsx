import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useQuery } from '@tanstack/react-query';
import { IPokemon, IPokemonSpecies } from 'pokeapi-typescript';
import { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Animated
} from 'react-native';
import { white } from 'tailwindcss/colors';
import { getPokemonByName, getPokemonSpeciesByName } from '../../api/pokemonApi';
import getPokemonColor from '../../utils/get-pokemon-color';
import getPokemonImageUrl from '../../utils/get-pokemon-image-url';

import PokemonDetails from './components/pokemon-details';
import PokemonImage from './components/pokemon-image';
import Loading from './loading';
import NotFound from './not-found';

export default function DetailsScreen({ route }: { route: any }): JSX.Element {



  let opacity = useRef(new Animated.Value(0)).current

  useEffect(()=>{
      Animated.timing(opacity,{
          toValue: 1,
          duration: 200,
          useNativeDriver: true
      }).start()

      return ()=>{
          Animated.timing(opacity,{
              toValue: 0,
              duration: 200,
              useNativeDriver: true
          }).start()
      }
  },[])

  const { name } = route.params;
  console.log(name);
  

  const pokemonResponse = useQuery(['pokemon', name], () => getPokemonByName(name))
  const pokemonSpeciesResponse = useQuery(['pokemon', pokemonResponse.data?.id], () => getPokemonSpeciesByName(pokemonResponse.data?.name as string), {
    enabled: !!pokemonResponse.data?.name
  })



  if (pokemonResponse.isError) {
    return <NotFound/>
  }

  
  if (pokemonSpeciesResponse.isError) {
    return <Text>Error</Text>
  }

  if (pokemonSpeciesResponse.isLoading) {
    return <Loading/>
  }




  


  return (
    <Animated.View
      style={{
        opacity:opacity,
        backgroundColor: getPokemonColor(pokemonSpeciesResponse.data.color ? pokemonSpeciesResponse.data.color.name : 'white')
      }}
      className='flex h-full pt-10'>
      <PokemonImage src={getPokemonImageUrl(JSON.stringify(pokemonResponse.data?.id))} />
      <PokemonDetails pokemon={pokemonResponse.data as IPokemon} pokemonSpecies={pokemonSpeciesResponse.data as IPokemonSpecies} />
    </Animated.View>
  );

}