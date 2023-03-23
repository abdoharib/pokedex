import {
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PokemonList from './components/pokemon-list';
import SearchInput from '../../components/search-input';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from 'tailwindcss/colors';

export default function ListScreen(): JSX.Element {
  return (
    <SafeAreaView className='bg-white h-full w-full px-8'>


      <View className='w-full flex items-center mb-8'>
        <View className='text-center flex items-center'>
          <Text className=' font-extrabold text-gray-800 pt-2 text-3xl' >Pokedex</Text>
          <Text className='w-60 text-center text-gray-400 pt-1 leading-5'>explore the vast creatures of the pokemen world</Text>
        </View>
      </View>


      <SearchInput placeholder="seach by name" icon={<Icon size={25} color={colors.gray[200]} name="search-outline"></Icon>} />
      <PokemonList />

    </SafeAreaView>
  );
}