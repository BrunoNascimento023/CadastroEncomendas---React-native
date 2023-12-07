import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import {css} from '../assets/css/Css';
// import config from '../../config/config';


const cadastrarEncomenda = () => {
    const [nome, setNome] = useState('');
    const [codigo, setCodigo] = useState('');
    const [remetente, setRemetente] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit2 = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://192.168.0.119:3000/createEnc', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              nome: nome,
              codigo: codigo,
              remetente: remetente,
            }),
          });
    
          if (response.ok) {
            Alert.alert('Sucesso', 'Encomenda registrada com sucesso!');
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

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[css.container, css.darkbg]}
        >
            
            <View style={css.login_form}>
                <TextInput
                    style={css.login_input}
                    placeholder="Nome:"
                    onChangeText={(text) => setNome(text)}
                />
                <TextInput
                    style={css.login_input}
                    placeholder="Código:"
                    onChangeText={(text) => setCodigo(text)}
                />
                <TextInput
                    style={css.login_input}
                    placeholder="Remetente:"
                    onChangeText={(text) => setRemetente(text)}
                />
                <TouchableOpacity style={css.login_btn} onPress={handleSubmit2}>
                    <Text style={css.login_btnText}>Cadastrar</Text>
                </TouchableOpacity>
                <Text>{mensagem}</Text>
            </View>
        </KeyboardAvoidingView>
    );
};

export default cadastrarEncomenda;
