import {
  Animated,
  Text,
  View,
} from 'react-native';
import colors from 'tailwindcss/colors';
import PrecentageBar from '../../../components/precentage-bar';
import IonIcon from 'react-native-vector-icons/Ionicons';


type GenderDisturbutionProps = {
  male:number,
  female:number
}
export default function GenderDisturbution(props:GenderDisturbutionProps) {
  return (
    <View>
      <PrecentageBar data={[
        {
          val: props.male,
          icon: <IonIcon size={15} name='male-sharp' />,
          color: colors.pink[300]
        },
        {
          val: props.female,
          icon: <IonIcon size={15} name='female' />,
          color: colors.blue[300]
        }
      ]}>
        <Text className=' font-medium pb-2 text-gray-700 text-center'>
          Gender Disturbution
        </Text>
      </PrecentageBar>
    </View>
  )
}