import {

    Button,
    Pressable,
    Text,
    TextInput,
    View,
} from 'react-native';
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import colors from "tailwindcss/colors";

export default function SearchInput(): JSX.Element {

    let [query, setQuery] = useState('')

    return (
        <View className='flex mb-6 flex-row border-2 border-gray-300 p-3 rounded-[60px] '>
            <TextInput
                className='grow pl-2 text-gray-600'
                onChangeText={setQuery}
                value={query}
                placeholder="search by name"
                keyboardType="numeric"
            />
            <View className='pr-2'>
                <Icon size={30} color={colors.gray[200]} name="search-outline"></Icon>
            </View>

        </View>
    );
}