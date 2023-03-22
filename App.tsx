/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './src/screens/list-screen';
import DetailsScreen from './src/screens/details-screen';
import Header from './src/components/header';
import { setCustomText } from 'react-native-global-props';

const customTextProps = { 
  style: { 
    fontFamily: 'Cairo'
  }
}
setCustomText(customTextProps)


type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  let Stack = createNativeStackNavigator()

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
        title:'',
        headerShadowVisible:false
      }} >

        <Stack.Screen options={
        {
          headerLeft: (props)=> <Header {...props} ></Header>
        }
      } name='home' component={ListScreen} />
        <Stack.Screen name='details' component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
