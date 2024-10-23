import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const API = 'bb9ea42a7910977adbae1835189f6192';

    const fetchWeather = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=Santo%20Domingo,DO&appid=${API}&units=metric`
            );
            setWeatherData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    if (!weatherData) {
        return (
            <View style={styles.container}>
                <Text>Cargando el clima...</Text>
            </View>
        );
    }

    const { main, weather, name } = weatherData;
    const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return (
        <View style={styles.container}>
            <Image 
                style={styles.image} 
                source={require('../images/nivel-de-calor.png')} 
            />
            <Text style={styles.title}>Clima en {name}</Text>
            <Image source={{ uri: weatherIcon }} style={styles.icon} />
            <Text style={styles.temperature}>{main.temp}ºC</Text>
            <Text style={styles.description}>{weather[0].description}</Text>
            <Text style={styles.details}>Humedad: {main.humidity}%</Text>
            <Text style={styles.details}>Presion: {main.pressure} bPa</Text>
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
    temperature: {
        fontSize: 48,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 18,
        marginBottom: 10,
    },
    details: {
        fontSize: 16,
        marginTop: 5,
    },
    icon: {
        width: 100,
        height: 100,
    },
    image: {
        width: 250, 
        height: 250, 
        marginBottom: 20, 
    },
});

export default Weather;
