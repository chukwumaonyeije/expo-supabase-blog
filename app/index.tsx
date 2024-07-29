import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Welcome to My Blog</Text>
        <Text style={styles.subtitle}>Powered by Expo and Supabase</Text>
        
        <View style={styles.linkContainer}>
          <Link href="/posts" style={styles.link}>
            View Posts
          </Link>
          <Link href="/create" style={styles.link}>
            Create New Post
          </Link>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
  linkContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  link: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});
