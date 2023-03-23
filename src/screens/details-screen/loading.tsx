import { useEffect, useRef } from 'react';
import {
    Animated,
    View,
} from 'react-native';
import Spinner from '../../components/spinner';

export default function Loading(): JSX.Element {

    let opacity = useRef(new Animated.Value(0)).current

    useEffect(()=>{
        Animated.timing(opacity,{
            toValue: 1,
            duration: 200,
            useNativeDriver: true
        }).start()

        return ()=>{
            Animated.timing(opacity,{
                toValue: 0,
                duration: 200,
                useNativeDriver: true
            }).start()
        }
    },[])
    return (
        <Animated.View style={{
            opacity:opacity
        }} className='h-full flex justify-center items-center pt-3'>
            <Spinner/>
        </Animated.View>
    );

}