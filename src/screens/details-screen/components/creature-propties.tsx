import {
  Text,
  View,
} from 'react-native';
import colors from 'tailwindcss/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';


type CreatureProptiesnProps = {
  creatureWeight: number,
  creatureHeight: number,
}
export default function CreaturePropties(props: CreatureProptiesnProps) {
  return (
    <View className='flex flex-row w-full mb-6' >

      <View className='grow p-3 mr-4 rounded-3xl flex bg-yellow-100 items-center justify-center'>
        <Icon size={20} color={colors.gray[700]} name="ruler-vertical" solid></Icon>
        <View className='text-center flex items-center mt-2'>
          <Text className=' leading-5 font-semibold text-gray-600 '>{props.creatureWeight}in</Text>
          <Text className=' leading-5 text-xs text-gray-500'>{Math.ceil(props.creatureWeight * 2.54)} cm</Text>
        </View>
      </View>

      <View className='grow p-3 rounded-3xl flex bg-yellow-100 items-center justify-center'>
        <Icon size={20} color={colors.gray[700]} name="weight" solid></Icon>
        <View className='text-center flex items-center mt-2'>
          <Text className=' leading-5 font-semibold text-gray-600 '>{props.creatureWeight} lb</Text>
          <Text className=' leading-5 text-xs text-gray-500'>{Math.ceil(props.creatureWeight * 0.45)} kg</Text>
        </View>
      </View>

    </View >
  )
}