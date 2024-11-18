import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const user = {
    name: "Messi",
    email: "messi.goat@example.com",
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGv0ZIrLidHrXmxdSY38qwW3_FyQZhJo-sFQ&s",
    bio: "Lover of coffee and coding.",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pro}>Profile</Text>
      <View style={styles.bio}>
        <Image source={{ uri: user.profilePicture }} style={styles.profilePicture} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Cart</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Orders</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Favorites</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Settings</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Logout</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
  },
  pro: {
    fontSize: 50,
    marginTop: 20,
  },
  email: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  bio: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%',
    backgroundColor: '#FF5E00',
    padding: 30,
    borderRadius: 50,
  },
  actions: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ProfileScreen;
