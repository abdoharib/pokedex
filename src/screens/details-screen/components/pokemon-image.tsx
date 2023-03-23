import { useEffect, useRef } from 'react';
import {
  Animated,
} from 'react-native';
import { SvgUri } from 'react-native-svg';


type Props = {
  src: string,
}

export default function PokemonImage({ src }: Props): JSX.Element {

  let opacity = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start()

  }, [])


  return (

    <Animated.View 
    style={{
      opacity:opacity
    }}
    className='flex justify-center items-center p-8 pt-10 pb-10'>
      <SvgUri style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 6,
          height: 8,
        },
        shadowOpacity: 0.15,
        shadowRadius: 0,
      }} className='' width={180} height={180} uri={src} />
    </Animated.View>


  );
}