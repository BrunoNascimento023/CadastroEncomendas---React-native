import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View,Image, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {css} from '../assets/css/Css';

export  default function Home({navigation}){
    return(
        <KeyboardAvoidingView
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         style={[css.container, css.darkbg]}>
            <View style={css.login_img}>
                    <Image
                        style={{
                        width: 200,
                        height: 300,
                        }} 
                        source={require('../assets/img/logo_app.png.png')}>
                    </Image>      
            </View>

            

            <View style={css.login_form}>
                <TextInput style={css.login_input} placeholder="Código de Rastreamento"/>
                <TouchableOpacity style={css.login_btn}>
                    <Text style={css.login_btnText}>Pesquisar</Text>
                </TouchableOpacity>
            </View>

            {/* <Button title="Ir para o Login" onPress={()=> props.navigation.navigate('Login')}></Button> */}
        </KeyboardAvoidingView>
    )
}