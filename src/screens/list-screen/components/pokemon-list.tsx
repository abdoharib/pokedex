import {
    Text, View,
} from 'react-native';
import {
    useInfiniteQuery,

} from '@tanstack/react-query'
import PokemonListItem from './pokemon-list-item';
import { getAllPokemons } from '../../../api/pokemonApi';
import getOffsetFromUrl from '../../../utils/get-offset-from-url';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { INamedApiResource, IPokemon } from 'pokeapi-typescript';
import { FlashList } from '@shopify/flash-list';
import Spinner from '../../../components/spinner';

export default function PokemonList(): JSX.Element {


    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isFetching,
        status,
    } = useInfiniteQuery({
        queryKey: ['pokemons'],
        queryFn: getAllPokemons,
        getNextPageParam: (lastPage, pages) => getOffsetFromUrl(lastPage.next),
    })
    const renderItem = useMemo(() =>
        ({ item }: {item:INamedApiResource<IPokemon>}) => <PokemonListItem {...item} />, []
    );
    const keyExtractor = useCallback(
        (item: INamedApiResource<IPokemon>) => item.name, []
    )



    


   


    const loadMore = () => {
        if (hasNextPage) {
            fetchNextPage();
        }
    };

    if (status === 'loading') return <View className='mt-28 justify-center items-center'><Spinner/></View>

    if (status === 'error') return <Text>Error</Text>




    return (

        

        <FlashList
            keyExtractor={keyExtractor}
            className='mt-2 px-2 pr-3'
            data={data.pages.map(page => page.results).flat()}
            renderItem={renderItem}
            onEndReached={loadMore}
            estimatedItemSize={200}
            ListHeaderComponentStyle={{
                paddingTop:15
            }}
            ListFooterComponent={isFetchingNextPage ? <Spinner/> : null}
        >

        </FlashList>

    );
}