import {

    Button,
    Image,
    Pressable,
    Text,
    View,
} from 'react-native';
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import { SvgUri } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';

export default function PokemonListItem(): JSX.Element {
    return (
        <View className='flex flex-row max-h-[120] mb-8 items-center bg-yellow-100 justify-between rounded-[50px]'>
            <View className='flex flex-row items-center '>
                <SvgUri style={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 6,
                        height: 8,
                    },
                    shadowOpacity: 0.15,
                    shadowRadius: 0,
                }} className='ml-2 mb-10 drop-shadow'  width={120} height={110} uri={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg'} />
                <View className='pl-2'>
                    <Text className='font-extrabold text-xl text-gray-700' >Pikachu</Text>
                    <Text className=' text-gray-500 text-lg '>#25</Text>
                </View>
            </View>
            <Icon.Button className='px-6' size={25} backgroundColor={'transparent'} color="black" name="caret-forward-outline"></Icon.Button>
        
        </View>
    );
}