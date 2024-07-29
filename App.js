// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient('https://rsblvbfhbojlkbgwcxfz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzYmx2YmZoYm9qbGtiZ3djeGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyMTQ4NzUsImV4cCI6MjAzNzc5MDg3NX0._tyrclGRJREAq1NV_SmJcPTaRH9cZcXhsBAQ8zo52tE');

export default function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) console.error('Error fetching posts:', error);
    else setPosts(data);
  }

  async function addPost() {
    const { data, error } = await supabase
      .from('posts')
      .insert({ title, content });
    
    if (error) console.error('Error adding post:', error);
    else {
      setTitle('');
      setContent('');
      fetchPosts();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Blog</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Content"
          value={content}
          onChangeText={setContent}
          multiline
        />
        <Button title="Add Post" onPress={addPost} />
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  post: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});