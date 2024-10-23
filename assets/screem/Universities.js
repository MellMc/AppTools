import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Linking, Alert, Image } from 'react-native';
import axios from "axios";

const Universities = () => {
    const [country, setCountry] = useState('');
    const [universities, setUniversities] = useState([]);

    const fetchUniversity = async () => {
        if (!country.trim()) {
            Alert.alert('Error', 'Por favor, introduce un país válido.');
            return;
        }

        try {
            const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
            if (response.data.length === 0) {
                Alert.alert('No se encontraron universidades', 'Por favor, verifica el nombre del país e intenta nuevamente.');
            } else {
                setUniversities(response.data);
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Ocurrió un problema al buscar universidades.');
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => Linking.openURL(item.web_pages[0])}>
            <View style={styles.universityItem}>
                <Text style={styles.universityName}>{item.name}</Text>
                <Text>{item.domains[0]}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Image 
                style={styles.image} 
                source={require('../images/rb_2147622543.png')} 
            />
            <Text style={styles.title}>Introduce el nombre de un país:</Text>
            <TextInput
                style={styles.input}
                placeholder="País"
                value={country}
                onChangeText={setCountry}
            />
            <TouchableOpacity style={styles.button} onPress={fetchUniversity}>
                <Text style={styles.buttonText}>Buscar Universidades</Text>
            </TouchableOpacity>
            <FlatList
                data={universities}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                style={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    universityItem: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        width: '100%',
    },
    universityName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    list: {
        marginTop: 20,
        width: '100%',
    },
    button: {
        backgroundColor: '#FF8C00', 
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: 250, 
        height: 250, 
        marginBottom: 20, 
    },
});

export default Universities;
