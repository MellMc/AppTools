import React from 'react';
import { View, Text, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={{ uri: '../images/foto-mel.jpg' }} 
      />
      <Text style={styles.name}>Crismel Mariñez</Text>
      <Text style={styles.profession}>Desarrollador de Software</Text>
      <Text style={styles.description}>
        Soy desarrolladora con experiencia en aplicaciones móviles y desarrollo web. Estoy disponible para nuevos proyectos y trabajos.
      </Text>
      
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('mailto:marinezmmel@gmail.com')}>
        <Text style={styles.buttonText}>Contactar por Email</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.linkedin.com/in/mel-mari%C3%B1ez-c-9a41742b3/')}>
        <Text style={styles.buttonText}>Visitar mi LinkedIn</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profession: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#ee8b29', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, 
    elevation: 5,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3,
    shadowRadius: 4
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
    textAlign: 'center',
  },
});

export default About;
