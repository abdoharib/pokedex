import { useQuery } from '@tanstack/react-query';
import { IPokemon, IPokemonSpecies } from 'pokeapi-typescript';
import { useEffect, useRef } from 'react';
import {
  Animated,
} from 'react-native';
import colors from 'tailwindcss/colors';
import getGenderDisturbutionFromGenderRate from '../../../utils/get-gender-disturbution-from-gender-rate';
import CreaturePropties from './creature-propties';
import GenderDisturbution from './gender-disturbution';
import GeneralDescription from './general-description';




export default function PokemonDetails({ pokemon, pokemonSpecies }: { pokemon: IPokemon, pokemonSpecies: IPokemonSpecies }): JSX.Element {

  let translateY = useRef(new Animated.Value(500)).current
  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start()

  }, [])


  return (
    <Animated.View style={{
      transform: [
        {
          translateY: translateY
        }
      ]
    }} className='grow w-full bg-white p-10 rounded-t-[50px] shadow-md'>

      <GeneralDescription
        id={JSON.stringify(pokemon.id)}
        name={pokemon.name}
        description={pokemonSpecies.flavor_text_entries && pokemonSpecies.flavor_text_entries.length ? pokemonSpecies.flavor_text_entries.find(v => v.language.name == 'en')?.flavor_text : 'no description exists'} />
      <CreaturePropties creatureWeight={pokemon.weight} creatureHeight={pokemon.height} />
      <GenderDisturbution {...getGenderDisturbutionFromGenderRate(pokemonSpecies.gender_rate)} />

    </Animated.View>

  );
}




