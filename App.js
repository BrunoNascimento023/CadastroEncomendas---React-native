// import React {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text, View, Alert } from 'react-native';
import {css} from './assets/css/Css.js';
import {Home, Login, Rastreio, Cadastro} from './views/Index';
import Encomendas from './views/cadastrarEncomenda.js';




export default function App() {

     const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cadastro"  component={Cadastro}/>
        <Stack.Screen name="Encomendas"  component={Encomendas}/>
        <Stack.Screen name="Login"  component={Login}/>
        <Stack.Screen name="Rastreio" component={Rastreio}/>
      <Stack.Screen
       name="Home"
       component={Home} 
        options={{title: 'Cadastro Fácil',
        headerStyle:{backgroundColor:'#ffff'},
         headerTintColor: '#4ebf90',
          headerTitleStyle:{fontWeight: 'bold'} }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}
