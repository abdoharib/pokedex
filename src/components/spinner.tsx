import {

    Animated,
    Button,
    Easing,
    Pressable,
    Text,
    TextInput,
    TransformsStyle,
    View,
} from 'react-native';
import {  useEffect, useRef } from 'react';
import { SvgUri } from 'react-native-svg';


export default function Spinner(): JSX.Element {

    let rotationDeg = useRef(new Animated.Value(0)).current


    useEffect(()=>{
        Animated.loop(
            Animated.timing(rotationDeg,{
                toValue: 360,
                duration: 1000,
                useNativeDriver: true
            })
        ).start()
            
    
    },[])

    return (
            <View className='  flex justify-center items-center'>
                <Animated.View className=' flex flex-row justify-center items-center h-20 w-20' style={
                    [
                        {
                            transform:[
                              
                                {
                                    
                                    rotate:rotationDeg.interpolate({
                                        inputRange:[0,360],
                                        outputRange:['0deg','360deg']
                                    })
                                    
                                },
                               
                            ],
                            
                        },
                    ]
                }>
                    <SvgUri style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 6,
                            height: 8,
                        },
                        shadowOpacity: 0.15,
                        shadowRadius: 0,
                    }} className='drop-shadow' height={60} width={60}  uri='https://okagdwrdblnzeeaiqdgp.supabase.co/storage/v1/object/public/test/spinner.svg?t=2023-03-23T18%3A22%3A00.702Z' />
                </Animated.View>

                <Text className='text-center font-bold text-gray-500 pt-2 pl-2'>LOADING ...</Text>
            </View>
    );
}