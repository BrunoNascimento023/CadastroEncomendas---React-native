    import React from "react";
    import { StatusBar } from 'expo-status-bar';
    import { Text, View,Button,  Image, TextInput, KeyboardAvoidingView, TouchableOpacity, Platform, Alert } from "react-native";
    import {css} from '../assets/css/Css';
    // import config from '../../config/config';
    import { useEffect, useState } from 'react';

    export  default function CreateUser(navigation){


        const [name,setName]=useState('');
        const [email,setEmail]=useState('');
        const [password,setPassword]=useState('');
        

        const handleSubmit = async (e) => {
            e.preventDefault();
        
            try {
              const response = await fetch('http://192.168.0.119:3000/create', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: name,
                  email: email,
                  password: password,
                }),
              });
        
              if (response.ok) {
                Alert.alert('Sucesso', 'Usuário criado com sucesso!');
                // Faça algo após o usuário ser criado com sucesso, se necessário
              } else {
                console.error('Erro ao criar usuário:', response.status);
                // Trate o erro conforme necessário
              }
            } catch (error) {
              console.error('Erro ao conectar com a API:', error);
              // Trate o erro conforme necessário
            }
          };

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

                

                <View style={css.login_form}>
                    <TextInput style={css.login_input} placeholder="Usuário" onChangeText={text=>setName(text)}/>
                    <TextInput style={css.login_input} placeholder="E-mail" autoCapitalize="none" onChangeText={text=>setEmail(text)}/>
                    <TextInput style={css.login_input} placeholder="Senha" secureTextEntry={true} autoCapitalize="none" onChangeText={text=>setPassword(text)}/>
                    <TouchableOpacity style={css.login_btn} onPress={handleSubmit} >
                        <Text style={css.login_btnText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={css.login_btn_criar}>

                    <Button title="Ir para o Login" onPress={()=> navigation.navigation.navigate('Login')}></Button>

                </View>
            </KeyboardAvoidingView>
        )
    }