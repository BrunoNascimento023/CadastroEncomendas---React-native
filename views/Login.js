import React from "react";
import { StatusBar } from 'expo-status-bar';
// import { Config } from "../config/config.json";
import { Text, View, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, Platform, Button, Alert } from "react-native";
import {css} from '../assets/css/Css';
import { useEffect, useState } from 'react';

export  default function Login(navigation){

    // const [display, setDisplay]=useState('none');
    // const [name, setName]=useState(null);
    // const [password, setPassword]=useState(null);
    // const [login, setLogin]=useState(null);

    // async function sendForm()
    // {
    //     let response=await fetch('http://192.168.0.119:3000/login',{
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'  
    //         },
    //         body: JSON.stringify({
    //             name: name,
    //             password: password
    //         })
    //     });
    //     if(response.ok){
    //         props.navigation.navigate('Home');
            
    //     }else{
            
    //     }
    //     let json=await response.json();
    //     if(json === 'falha'){
    //         setDisplay('flex');
    //         setTimeout(()=>{
    //             setDisplay('none');
    //         }, 5000);
    //     }
    // }
    
    


    
        return(


            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[css.container, css.darkbg]}>
                <View style={css.login_img}>
                        <Image
                            style={{
                            width: 200,
                            height: 350,
                            }} 
                            source={require('../assets/img/logo_app.png.png')}>
                        </Image>      
                        
                </View>

                <View>
                    {/* <Text style={css.login_msg(display)}>Usuário ou Senha invalidos!</Text>  */}
                </View>

                <View style={css.login_form}>
                    <TextInput style={css.login_input} placeholder='Usuário:' onChangeText={text=>setName(text)} />
                    <TextInput style={css.login_input} placeholder='Senha:' onChangeText={text=>setPassword(text)} secureTextEntry={true} />
                    <TouchableOpacity style={css.login_button} onPress={()=>navigation.navigation.navigate('Home')} >
                        <Text style={css.login_btn}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                <View style={css.login_btn_criar}>
                    <Button title="Crie uma conta aqui!" onPress={()=> navigation.navigation.navigate('Cadastro')}></Button>
                </View>
            </KeyboardAvoidingView>
        )
    }