import {
    Text,
    View,
} from 'react-native';
import React, { ReactNode } from 'react';


type DataPoint = {
    icon: ReactNode,
    val: number,
    color: any
}

type Props = {
    data: DataPoint[],
    [key: string]: any
}

export default function PrecentageBar({ data, children }: Props): JSX.Element {

    return (
        <View>

            <View>
                {children}
            </View>

            <View style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 5,
                    height: 4,
                },
                shadowOpacity: 0.15,
                shadowRadius: 0,
            }}>

                <View className='flex flex-row h-4 overflow-hidden  rounded-full'>
                    {
                        data.map((v: DataPoint, index: number) => (
                            <View
                                style={{
                                    width: v.val + '%',
                                    backgroundColor: v.color,
                                }} key={index} >

                                </View>
                        ))
                    }
                </View>

            </View>

            <View className='flex flex-row justify-between mt-3 px-2'>
                {
                    data.map((v: DataPoint, index: number) => (
                        <View key={index} className='flex flex-row items-baseline'>
                            {v.icon}
                            <Text className='pl-1'>{v.val}%</Text>
                        </View>
                    ))
                }

            </View>
        </View>
    );
}
