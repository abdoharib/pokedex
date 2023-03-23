import {
    Pressable,
    Text,
    View,
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from 'tailwindcss/colors';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import {  NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { INamedApiResource, IPokemon } from 'pokeapi-typescript';
import getLastUrlSegment from '../../../utils/get-last-url-segment';
import { useQuery } from '@tanstack/react-query';

//api
import { getPokemonSpeciesByName } from '../../../api/pokemonApi';
import getPokemonImageUrl from '../../../utils/get-pokemon-image-url';
import getPokemonColor from '../../../utils/get-pokemon-color';


export default function PokemonListItem(props: INamedApiResource<IPokemon>): JSX.Element {


    const pokemonId = getLastUrlSegment(props.url)
    const { isLoading, isError, data, error } = useQuery(['pokemon', pokemonId], () => getPokemonSpeciesByName(pokemonId))

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
   
    if (isLoading) {
        return (
            <View className='flex flex-row min-h-[110] mb-8 items-center bg-gray-300 justify-between rounded-[50px]'>

            </View>
        )
    }

    if (isError) {
        return <Text>Error</Text>
    }
    
    return (
        <View style={{
            backgroundColor: getPokemonColor(data.color.name),
            
        }} className='flex flex-row max-h-[110] mb-8 items-center justify-between rounded-[50px]'>
            <View className='flex flex-row items-center '>
                <SvgUri style={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 6,
                        height: 8,
                    },
                    shadowOpacity: 0.15,
                    shadowRadius: 0,
                }} className='ml-2 mb-10 drop-shadow' width={90} height={90} uri={getPokemonImageUrl(pokemonId)} />
                <View className='pl-3'>
                    <Text className='font-extrabold text-lg text-gray-700' >{props.name}</Text>
                    <Text className=' text-gray-500 text-md '>#{pokemonId}</Text>
                </View>
            </View>
            <Pressable onPress={() => navigation.push('details',{
                name:props.name
            })} className='px-6'>
                <Icon size={20} color={colors.gray[700]} name="caret-forward-outline"></Icon>
            </Pressable>

        </View>
    );
}