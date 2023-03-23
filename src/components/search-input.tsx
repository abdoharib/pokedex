import {

    Button,
    Pressable,
    Text,
    TextInput,
    View,
} from 'react-native';
import { HeaderBackButtonProps, NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import Icon from 'react-native-vector-icons/Ionicons';
import { ReactNode, useState } from 'react';
import colors from "tailwindcss/colors";
import { ParamListBase, useNavigation } from '@react-navigation/native';

type Props = {
    onSearch?: (q:string) => void,
    icon : ReactNode
    [key:string]:any
}

export default function SearchInput(props:Props): JSX.Element {

    let [query, setQuery] = useState('')
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();


    return (
        <View className='flex mb-6 flex-row border-2 border-gray-300 p-3 rounded-[60px] '>
            <TextInput
                className='grow pl-2 text-gray-600'
                onChangeText={setQuery}
                value={query}
                {...props}
                keyboardType="numeric"
                onEndEditing={(e)=>navigation.push('details',{name:query})}
            />
            <View className='pr-2'>
                {props.icon || null}
                
            </View>

        </View>
    );
}