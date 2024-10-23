import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Linking, ScrollView } from 'react-native';
import axios from 'axios';

const News = () => {
    const [posts, setPosts] = useState([]); 

    const fetchNews = async () => {
        try {
            const response = await axios.get('https://kinsta.com/wp-json/wp/v2/posts');
            setPosts(response.data.slice(0, 3));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <ScrollView style={styles.container}>
            {posts.map((post) => (
                <View key={post.id} style={styles.post}>
                    <Text style={styles.title}>
                        {post.title.rendered}
                    </Text>
                    <Text style={styles.excerpt}>
                        {post.content.rendered.replace(/<[^>]+>/g, '').substring(0, 200)}...
                    </Text>
                    <Button 
                        title='Leer Más'
                        onPress={() => Linking.openURL(post.link)}
                    />
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fffff',
    },
    post: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    excerpt: {
        fontSize: 14,
        color: '#333',
        marginBottom: 10,
    },
});
  
export default News;
