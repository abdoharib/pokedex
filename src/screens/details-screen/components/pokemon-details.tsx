import { useQuery } from '@tanstack/react-query';
import { IPokemon, IPokemonSpecies } from 'pokeapi-typescript';
import {
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import colors from 'tailwindcss/colors';
import { getPokemonSpeciesByName } from '../../../api/pokemonApi';
import PrecentageBar from '../../../components/precentage-bar';
import getGenderDisturbutionFromGenderRate from '../../../utils/get-gender-disturbution-from-gender-rate';



export default function PokemonDetails({pokemon, pokemonSpecies}:{pokemon:IPokemon,pokemonSpecies:IPokemonSpecies}): JSX.Element {




  return (

    <View className='grow w-full bg-white p-10 rounded-t-[50px] shadow-md'>

      <GeneralDescription 
      id={JSON.stringify(pokemon.id)} 
      name={pokemon.name} 
      description={ pokemonSpecies.flavor_text_entries && pokemonSpecies.flavor_text_entries.length ? pokemonSpecies.flavor_text_entries[0].flavor_text : 'no description exists'} />
      <CreaturePropties creatureWeight={pokemon.weight} creatureHeight={pokemon.height} />
      <GenderDisturbution {...getGenderDisturbutionFromGenderRate(pokemonSpecies.gender_rate)}/>

    </View>

  );
}



type GeneralDescriptionProps = {
  name:string,
  id:string,
  description:string
}

function GeneralDescription(props:GeneralDescriptionProps) {

  
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
        {JSON.stringify(props.description)}
      </Text>

    </View>
  )
}

type CreatureProptiesnProps = {
  creatureWeight:number,
  creatureHeight:number,
}
function CreaturePropties(props:CreatureProptiesnProps) {
  return (
    <View className='flex flex-row w-full mb-6' >

      <View className='grow p-3 mr-4 rounded-3xl flex bg-yellow-100 items-center justify-center'>
        <Icon size={20} color={colors.gray[700]} name="ruler-vertical" solid></Icon>
        <View className='text-center flex items-center mt-2'>
          <Text className=' leading-5 font-semibold text-gray-600 '>{props.creatureWeight}in</Text>
          <Text className=' leading-5 text-xs text-gray-500'>{props.creatureWeight * 2.54} cm</Text>
        </View>
      </View>

      <View className='grow p-3 rounded-3xl flex bg-yellow-100 items-center justify-center'>
        <Icon size={20} color={colors.gray[700]} name="weight" solid></Icon>
        <View className='text-center flex items-center mt-2'>
          <Text className=' leading-5 font-semibold text-gray-600 '>{props.creatureWeight} lb</Text>
          <Text className=' leading-5 text-xs text-gray-500'>{props.creatureWeight*0.45} kg</Text>
        </View>
      </View>

    </View >
  )
}

type GenderDisturbutionProps = {
  male:number,
  female:number
}
function GenderDisturbution(props:GenderDisturbutionProps) {
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
