import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import GradientButton from '../components/GradientButton';

const { height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password) {
      setError('Email dan password wajib diisi.');
    } else if (!emailRegex.test(email)) {
      setError('Email tidak valid.');
    } else if (email === 'user@example.com' && password === 'password123') {
      setError('');
      navigation.replace('Dashboard');
    } else {
      setError('Email atau password salah.');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://source.unsplash.com/featured/?nature,landscape' }}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back</Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          theme={{ colors: { primary: '#ff7e5f', underlineColor: 'transparent' } }}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          theme={{ colors: { primary: '#ff7e5f', underlineColor: 'transparent' } }}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <GradientButton text="Login" onPress={handleLogin} />
        <Text style={styles.registerText}>
          Don't have an account?{' '}
          <Text style={styles.registerLink} onPress={() => alert('Signup coming soon!')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff7e5f',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 15,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  registerText: {
    marginTop: 10,
    fontSize: 14,
  },
  registerLink: {
    color: '#ff7e5f',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
