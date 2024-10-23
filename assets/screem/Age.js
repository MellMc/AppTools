import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const Age = () => {
    const [name, setName] = useState(''); 
    const [ageData, setAgeData] = useState(null);

    const revealAge = async () => {
        try {
          
            const response = await axios.get(`https://api.agify.io/?name=${name}`);
            const reveal = response.data.age;

            setAgeData(reveal); 
        } catch (error) {
            console.error(error);
        }
    };

    const getAgeCategory = (age) => {
        if (age < 25) {
            return { category: 'Joven', image: require('../images/joven1.jpg') };
        } else if (age < 65) {
            return { category: 'Adulto', image: require('../images/adulto1.jpg') };
        } else {
            return { category: 'Anciano', image: require('../images/anciano1.jpg') };
        }
    };

    const ageCategory = ageData ? getAgeCategory(ageData) : null;

    return (
        <View style={styles.container}>
            <Image 
                style={styles.image} 
                source={require('../images/3365298.jpg')}
            />
            <Text style={styles.title}>Introduce tu Nombre:</Text>
            <TextInput
                style={styles.input}
                placeholder='Nombre'
                value={name}
                onChangeText={setName} 
            />
            <TouchableOpacity style={styles.button} onPress={revealAge}>
                <Text style={styles.buttonText}>Predecir Edad</Text>
            </TouchableOpacity>
            {ageData && (
                <View style={styles.result}>
                    <Text style={styles.ageText}>
                        Edad predicha: {ageData} años
                    </Text>
                    <Text style={styles.categoryText}>
                        Eres: {ageCategory.category}
                    </Text>
                    <Image source={ageCategory.image} style={styles.categoryImage} />
                </View>
            )}
        </View>
    );
}

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
    result: {
        marginTop: 20,
        alignItems: 'center',
    },
    ageText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    categoryText: {
        fontSize: 16,
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#FF8C00', 
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
    categoryImage: {
        width: 100,
        height: 100,
        marginTop: 10,
    },
    image: {
        width: 250, 
        height: 250, 
        marginBottom: 20, 
    },
});

export default Age;
