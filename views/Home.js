import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image} from "react-native";
import {css} from '../assets/css/Css';
// import { useNavigation } from '@react-navigation/native';    


export  default function Home(props){

    
    return(
        <View style={css.container2}>
            <TouchableOpacity style={[css.Button_Home, {marginRight: 10}]} 
             onPress={()=> props.navigation.navigate('Encomendas')}>
            <Image
             style={{
                width: 100,
                height: 150,
                resizeMode: 'contain',
              }}
                source={require('../assets/img/adicionar.png')}
            />
            </TouchableOpacity>

            <TouchableOpacity style={[{marginLeft: 10}]}
             onPress={()=> props.navigation.navigate('Rastreio')}>
            <Image
            style={{
                width: 100,
                height: 150,
                resizeMode: 'contain',
              }}
                source={require('../assets/img/rastrearr.png')}
            />
            </TouchableOpacity>
        </View>
    )
}



