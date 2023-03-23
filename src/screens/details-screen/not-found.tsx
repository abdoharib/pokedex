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
import { SvgUri } from 'react-native-svg';
import { white } from 'tailwindcss/colors';
import { getPokemonByName, getPokemonSpeciesByName } from '../../api/pokemonApi';
import getPokemonColor from '../../utils/get-pokemon-color';
import getPokemonImageUrl from '../../utils/get-pokemon-image-url';

import PokemonDetails from './components/pokemon-details';
import PokemonImage from './components/pokemon-image';

export default function NotFound(): JSX.Element {

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

    return (
        <Animated.View style={{
            opacity:opacity
        }} className='flex h-full pt-36'>
            <View className='w-full items-center'>
                <SvgUri style={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 6,
                        height: 8,
                    },
                    shadowOpacity: 0.15,
                    shadowRadius: 0,
                }} className='ml-2 mb-10 drop-shadow' width={200} height={200} uri='https://okagdwrdblnzeeaiqdgp.supabase.co/storage/v1/object/public/test/abra-seeklogo.com.svg?t=2023-03-23T18%3A07%3A06.835Z' />
            </View>
            <View className='flex items-cente px-10 items-center text-center'>
                <Text className='font-extrabold text-center text-3xl'>
                    Oh no, that Pokemon seems to be missing!
                </Text>
                <Text className=' w-3/4 font-medium text-center text-md pt-4 text-gray-500'>
                    Keep searching, it might turn up somewhere unexpected.
                </Text>
            </View>
        </Animated.View>
    );

}