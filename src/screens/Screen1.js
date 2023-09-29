import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useValue } from './ValueContext';
import { useNavigation } from '@react-navigation/native';


const Screen1 = () => {
    const navigation = useNavigation();
    const { value } = useValue();

    const navigateToScreen2 = () => {
        navigation.navigate('Screen2');
    };

    return (
        <View styles={style.container}>
            <Text>Valor do Contexto na Tela 1: {value}</Text>
            <TouchableOpacity
                styles={style.button}
                onPress={navigateToScreen2} >
                <Text>ir para Segunda tela</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Screen1;

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textDecor:{
        fontSize: 18,
        color: "#0f3da1"
    },
    button:{
        width: 100,
        height: 80,
        backgroundColor: "#5252da"
    }
    
})