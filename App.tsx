/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './src/screens/list-screen';
import DetailsScreen from './src/screens/details-screen';
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Menu from './src/components/menu';
import BackButton from './src/components/back-button';



function App(): JSX.Element {

  let Stack = createNativeStackNavigator()
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
          title: '',
          headerShadowVisible: false
        }} >

          <Stack.Screen options={
            {
              headerLeft: (props: HeaderBackButtonProps) => <Menu {...props} ></Menu>
            }
          } name='home' component={ListScreen} />
          <Stack.Screen
            options={
              {
                headerTransparent: true,
                headerLeft: (props: HeaderBackButtonProps) => <BackButton {...props} ></BackButton>
              }
            }

            name='details' component={DetailsScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>

  );
}

export default App;
