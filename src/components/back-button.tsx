import { NavigationAction, NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { HeaderBackButtonProps, NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';

import {

    Button,
    Pressable,
    Text,
    View,
} from 'react-native';
import colors from 'tailwindcss/colors';

export default function BackButton(props: HeaderBackButtonProps): JSX.Element {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <View className='mt-2 ml-2'>
            <Pressable onPress={() => navigation.goBack()}>
                <Icon  size={25} color={colors.gray[700]} name="caret-back-outline"></Icon>
            </Pressable>
        </View>
    );
}