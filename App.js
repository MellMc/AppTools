import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './assets/screem/Home';
import Gender from './assets/screem/Gender';
import Age from './assets/screem/Age';
import Universities from './assets/screem/Universities';
import Weather from './assets/screem/Weather';
import News from './assets/screem/News';
import About from './assets/screem/About'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Gender" component={Gender} />
        <Stack.Screen name="Age" component={Age} />
        <Stack.Screen name="Universities" component={Universities} />
        <Stack.Screen name="Weather" component={Weather} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="About" component={About} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
