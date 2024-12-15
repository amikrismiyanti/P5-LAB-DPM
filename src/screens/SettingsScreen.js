import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Logout logic here
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.settingItem}>
        <Text style={styles.settingTitle}>Account</Text>
        <Text style={styles.settingValue}>user@example.com</Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingTitle}>Notifications</Text>
        <Text style={styles.settingValue}>Enabled</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff7e5f',
    marginBottom: 30,
  },
  settingItem: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  settingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff7e5f',
  },
  settingValue: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  logoutButton: {
    backgroundColor: '#ff7e5f',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
