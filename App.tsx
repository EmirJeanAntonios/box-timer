/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ThemeProvider} from 'react-native-magnus';
import {Icon, Div} from 'react-native-magnus';
import InputSection from './components/InputSection';
import Divider from './components/Divider';
import Index from './views/Index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Timer from './views/Timer';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#4299e1',
            },
            headerTintColor: '#fff',
            animation: 'fade_from_bottom',
          }}>
          <Stack.Screen name="Home" component={Index} />
          <Stack.Screen name="Timer" component={Timer} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
