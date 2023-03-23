import {

    ActivityIndicator,
    Button,
    FlatList,
    Pressable,
    ScrollView,
    Text,
    
    View,
} from 'react-native';
import {
    InfiniteData,
    useInfiniteQuery,
    useQuery,
    useQueryClient
} from '@tanstack/react-query'

import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import PokemonListItem from './pokemon-list-item';
import { getAllPokemons } from '../../../api/pokemonApi';
import { useState } from 'react';
import axios from 'axios';
import { INamedApiResource, INamedApiResourceList, IPokemon } from 'pokeapi-typescript';
import getOffsetFromUrl from '../../../utils/get-offset-from-url';

export default function PokemonList(): JSX.Element {

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['pokemons'],
        queryFn: getAllPokemons,
        getNextPageParam: (lastPage, pages) => getOffsetFromUrl(lastPage.next),
    })
    const loadMore = () => {
        if (hasNextPage) {
            fetchNextPage();
        }
    };

    if (status === 'loading') return <Text>Loading</Text>

    if (status === 'error') return <Text>Error</Text>


    return (
        <FlatList

            className='pt-6 px-2 pr-3'
            data={data.pages.map(page => page.results).flat() }
            renderItem={(data) => <PokemonListItem {...data} />}
            onEndReached={loadMore}
            ListFooterComponent={isFetchingNextPage ? <ActivityIndicator></ActivityIndicator> : null}
            
        >

        </FlatList>
    );
}