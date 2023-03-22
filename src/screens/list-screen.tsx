import { NavigationAction, NavigationProp } from '@react-navigation/native';
import {

  Button,
  Image,
  SafeAreaViewComponent,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PokemonList from '../components/pokemon-list';
import SearchInput from '../components/search-input';

export default function ListScreen({ navigation }: { navigation: any }): JSX.Element {
  return (
    <SafeAreaView className='bg-white h-full w-full px-8'>


      <View className='w-full flex items-center pb-12'>
        <View className='text-center flex items-center'>
          <Text className=' font-extrabold pt-2 text-4xl' >Pokedex</Text>
          <Text className='w-60 text-center text-gray-400 pt-1 leading-5'>explore the vast creatures of the pokemen world</Text>
        </View>
      </View>


      <SearchInput />

      <PokemonList />

    </SafeAreaView>
  );
}