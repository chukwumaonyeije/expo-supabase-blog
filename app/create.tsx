import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient('https://rsblvbfhbojlkbgwcxfz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzYmx2YmZoYm9qbGtiZ3djeGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyMTQ4NzUsImV4cCI6MjAzNzc5MDg3NX0._tyrclGRJREAq1NV_SmJcPTaRH9cZcXhsBAQ8zo52tE');

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  async function handleSubmit() {
    if (!title || !content) {
      Alert.alert('Error', 'Please fill in both title and content');
      return;
    }

    const { data, error } = await supabase
      .from('posts')
      .insert({ title, content });
    
    if (error) {
      console.error('Error creating post:', error);
      Alert.alert('Error', 'Failed to create post');
    } else {
      Alert.alert('Success', 'Post created successfully');
      router.push('/posts');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Post</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.contentInput]}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Button title="Create Post" onPress={handleSubmit} />
      <Link href="/posts" style={styles.link}>Back to Posts</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  contentInput: {
    height: 150,
    textAlignVertical: 'top',
  },
  link: {
    fontSize: 18,
    color: '#007AFF',
    marginTop: 20,
  },
});