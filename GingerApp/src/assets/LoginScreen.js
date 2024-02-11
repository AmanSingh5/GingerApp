import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter both username and password');
    } else {
      fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
      .then(async response => {
        let res = await response.json();
        console.log("reponse error",res);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Invalid username or password');
        }
      })
      .then(data => {
        navigation.navigate('ProfileScreen');
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
    }
  };

  const handleCreateAccount = () => {
    navigation.navigate('signUpScreen');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF6347', '#FF69B4']}
        style={styles.gradient}
      >
        <View style={styles.contentContainer}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>My App</Text>
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
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
            <Text style={styles.createAccountButtonText}>Create Account</Text>
          </TouchableOpacity>
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
    paddingTop: 100,
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
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    flexDirection: 'row',
  },
  socialButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginHorizontal: 10,
  },
  createAccountButtonText:{
    color: '#fff',
    fontSize: 18,
  }
});

export default LoginScreen;
