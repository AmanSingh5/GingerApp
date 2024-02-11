import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const signUpScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
    } else if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
    } else {
      fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
      .then(response => {
        console.log("Response",response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to sign up');
        }
      })
      .then(data => {
        // Assuming successful signup, navigate to ProfileScreen
        navigation.navigate('ProfileScreen');
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF6347', '#FF69B4']}
        style={styles.gradient}
      >
        <View style={styles.contentContainer}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Sign Up</Text>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Text style={styles.icon}>👤</Text>
              <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.icon}>🔒</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                ecureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.icon}>🔒</Text>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                ecureTextEntry={true}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
              />
            </View>
            <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
              <Text style={styles.signupButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  logoContainer: {
    marginBottom: 50,
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#fff',
    marginLeft: 10,
  },
  icon: {
    fontSize: 24,
    color: '#fff',
  },
  signupButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default signUpScreen;
