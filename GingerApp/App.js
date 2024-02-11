import 'react-native-gesture-handler';
import React from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/assets/LoginScreen';
import signUpScreen from './src/assets/signUpScreen';
import ProfileScreen from './src/assets/ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="signUpScreen" component={signUpScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;