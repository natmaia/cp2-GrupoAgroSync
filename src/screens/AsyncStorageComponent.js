import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        loadDataFromStorage();
    }, []);

    const loadDataFromStorage = async () => {
        try {
            const storedData = await AsyncStorage.getItem('storedData');
            if (storedData) {
                setData(JSON.parse(storedData));
            }
        } catch (error) {
            console.error('Erro ao carregar dados do AsyncStorage:', error);
        }
    };

    const saveDataToStorage = async () => {
        try {
            const newData = { id: Date.now().toString(), value: inputValue };
            const updatedData = [...data, newData];
            await AsyncStorage.setItem('storedData', JSON.stringify(updatedData));
            setData(updatedData);
            setInputValue('');
        } catch (error) {
            console.error('Erro ao salvar dados no AsyncStorage:', error);
        }
    };
    

    const clearDataInStorage = async () => {
        try {
            await AsyncStorage.removeItem('storedData');
            setData([]);
            Alert.alert('Dados apagados com sucesso.');
        } catch (error) {
            console.error('Erro ao apagar dados do AsyncStorage:', error);
        }
    };

    return (
        <View >
            <TextInput 
                placeholder="Digite um valor"
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
            />
            <Button title="Salvar" onPress={saveDataToStorage} />
            <Button title="Limpar Dados" onPress={clearDataInStorage} />
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text>
                        ID: {item.id}, Valor: {item.value}
                    </Text>
                )}
            />
        </View>
    );
};

export default AsyncStorageComponent;
