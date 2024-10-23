import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const Gender = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState(null);

    const revealGender = async () => {
        try {
            const response = await axios.get(`https://api.genderize.io/?name=${name}`);
            const reveal = response.data.gender;

            setGender(reveal);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Image 
                style={styles.image} 
                source={require('../images/genero.png')}
            />
            <Text style={styles.title}> Introduce tu nombre: </Text>
            <TextInput
                style={styles.input}
                placeholder='Nombre'
                value={name}
                onChangeText={setName} 
            />
            <TouchableOpacity style={styles.button} onPress={revealGender}>
                <Text style={styles.buttonText}>Predecir Género</Text>
            </TouchableOpacity>
            {gender && (
                <View style={[styles.genderBox, { backgroundColor: gender === 'male' ? 'blue' : 'pink' }]}>
                    <Text style={styles.genderText}> El género predicho es: {gender === 'male' ? 'Masculino' : 'Femenino'}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    button: {
        backgroundColor: '#FF8C00', // Cambiar a un color naranja (puedes ajustar el código de color si es necesario)
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    genderBox: {
        padding: 20,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    genderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    image: {
        width: 250, // Ancho de la imagen
        height: 250, // Alto de la imagen
    },
});

export default Gender;
