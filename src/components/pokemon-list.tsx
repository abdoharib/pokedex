import {

    Button,
    FlatList,
    Pressable,
    ScrollView,
    Text,
    View,
} from 'react-native';
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import PokemonListItem from './pokemon-list-item';

export default function PokemonList(): JSX.Element {
    return (
        <FlatList
        className='pt-6 px-2 pr-3'
            data={[2,1,1,1,1,1,1]}
            renderItem={() => <PokemonListItem />}>

        </FlatList>
    );
}