import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const Home = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Image
        source={require('../images/caja-de-herramientas.png')}
        style={styles.image}
      />
         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Gender')}>
        <Text style={styles.buttonText}>Predecir Género</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Age')}>
        <Text style={styles.buttonText}>Predecir Edad</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Universities')}>
        <Text style={styles.buttonText}>Universidades por País</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Weather')}>
        <Text style={styles.buttonText}>Clima en República Dominicana</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('News')}>
        <Text style={styles.buttonText}>Noticias de WordPress</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 400, 
    height: 300, 
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#1aab33', 
    borderRadius: 10, 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    marginVertical: 10, 
    width: '80%',
    alignItems: 'center', 
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold',
  },
});

export default Home;
