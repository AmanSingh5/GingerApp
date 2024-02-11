import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [contact, setContact] = useState('');

  // Fetch user details on component mount
  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = () => {
    fetch('http://localhost:3000/getUserDetails')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch user details');
        }
      })
      .then(data => {
        // Assuming the API returns user details in a specific format
        setName(data.name);
        setDob(data.dob);
        setContact(data.contact);
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  const handleLogout = () => {
    navigation.navigate('LoginScreen');
  };

  const handleEditProfile = () => {
    if (!name.trim() || !dob.trim() || !contact.trim()) {
      Alert.alert('Error', 'Please fill in all fields.');
    } else {
      fetch('http://localhost:3000/editUserDetails', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          dob: dob,
          contact: contact,
        }),
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to update profile');
          }
        })
        .then(data => {
          // Assuming the API returns some data upon successful update
          Alert.alert('Success', 'Profile updated successfully.');
        })
        .catch(error => {
          Alert.alert('Error', error.message);
        });

        Alert.alert("Profile Updated successfully!")
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
            <Text style={styles.logoText}>My Profile</Text>
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputIcon}>👤</Text>
              <TextInput
                placeholder='Aman'
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#fff"
                value={name}
                onChangeText={text => setName(text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputIcon}>📅</Text>
              <TextInput
                style={styles.input}
                placeholder="Date of Birth"
                placeholderTextColor="#fff"
                value={dob}
                onChangeText={text => setDob(text)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputIcon}>📞</Text>
              <TextInput
                style={styles.input}
                placeholder="Contact"
                placeholderTextColor="#fff"
                value={contact}
                onChangeText={text => setContact(text)}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.editProfileButton} onPress={handleEditProfile}>
            <Text style={styles.editProfileButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
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
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingBottom: 5,
  },
  inputIcon: {
    fontSize: 24,
    color: '#fff',
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#fff',
    fontSize: 16,
  },
  editProfileButton: {
    marginTop: 20,
    paddingVertical: 12,
    backgroundColor: '#007bff',
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  editProfileButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    marginTop: 10,
    paddingVertical: 12,
    backgroundColor: '#dc3545',
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
