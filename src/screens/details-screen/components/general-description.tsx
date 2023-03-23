import {
  Animated,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from 'tailwindcss/colors';


  type GeneralDescriptionProps = {
    name:string,
    id:string,
    description?:string
  }
  
  export default function GeneralDescription(props:GeneralDescriptionProps) {
  
    
    return (
      <View className='mb-6'>
        <View className='flex flex-row justify-between items-center'>
          <View>
            <Text className='text-2xl text-gray-700 font-extrabold h-fit'>{props.name}</Text>
  
          </View>
          <View style={
            {
              shadowColor: "#000",
              shadowOffset: {
                width: 6,
                height: 6,
              },
              shadowOpacity: 0.10,
              shadowRadius: 0,
            }
          } className='rounded-full bg-yellow-100'>
            <Text className=' py-1 w-20 text-center font-extrabold text-gray-500 '>
              #{props.id}
            </Text>
          </View>
        </View>
        <Text className=' w-full leading-4 mt-3 text-gray-500'>
          {JSON.stringify(props.description?.replace(/\s+/g, ' ').trim())}
        </Text>
  
      </View>
    )
  }