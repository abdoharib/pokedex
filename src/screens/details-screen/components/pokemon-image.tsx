import {
    View,
  } from 'react-native';
  import { SvgUri } from 'react-native-svg';
  

  type Props = {
    src: string,
  }
  
  export default function PokemonImage({src}:Props): JSX.Element {
    return (
  
        <View className='flex justify-center items-center p-8 pt-10 pb-10'>
          <SvgUri style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 6,
              height: 8,
            },
            shadowOpacity: 0.15,
            shadowRadius: 0,
          }} className='' width={180} height={180} uri={src} />
        </View>
  
  
    );
  }