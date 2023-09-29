import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useValue } from './ValueContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Screen2 = () => {
    const { value, updateValue } = useValue();
    const [newValue, setNewValue] = useState('');

    const navAsync = useNavigation();

    const navigateToAsync = () => {
        navAsync.navigate('AsyncStorageComponent');
    };

    const saveNewValue = async () => {
        try {
            await AsyncStorage.setItem('value', newValue);
            updateValue(newValue);
            setNewValue('');
        } catch (error) {
            console.error('Erro ao salvar valor:', error);
        }
    };

    return (
        <View>
            <Text>Valor do Contexto na Tela 2: {value}</Text>
            <TextInput
                placeholder="Novo valor"
                value={newValue}
                onChangeText={(text) => setNewValue(text)}
            />
            <Button title="Salvar Novo Valor" onPress={saveNewValue} />

            <TouchableOpacity
                onPress={navigateToAsync} >
                <Text>ir para Async Storege</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Screen2;