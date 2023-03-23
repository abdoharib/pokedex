import Icon from 'react-native-vector-icons/Ionicons';

import {
    View,
} from 'react-native';
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';

export default function Menu(props:HeaderBackButtonProps): JSX.Element {
    return (
        <View className=''>
            <Icon.Button size={30} backgroundColor={'transparent'} color="black" name="menu-outline"></Icon.Button>
        </View>
    );
}