// screens/AyarlarScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const AyarlarScreen = ({ navigation }) => {
  const settingsOptions = [
    'Hesap Bilgileri',
    'Şifreyi Değiştir',
    'Varsayılan Para Birimi',
    'Tema',
    'Dil',
    'Bizi Değerlendirin',
    'Kişisel Verilerin Korunması',
    'Yasal Uyarı',
    'Hesabı Sil',
    'Çıkış Yap',
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {settingsOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.option, option === 'Çıkış Yap' && styles.logoutOption]}
          onPress={() => navigation.navigate(option)}
        >
          <Text style={[styles.optionText, option === 'Çıkış Yap' && styles.logoutText]}>{option}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    paddingBottom: 0, // This will remove the bottom padding from ScrollView
  },
  option: {
    width: '100%',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#FF5733', // Headerdaki renkten
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
  },
  logoutOption: {
    marginTop: 'auto',
    backgroundColor: '#FF5733', // Headerdaki renkten
    paddingBottom: 40, // Additional padding to cover the bottom
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AyarlarScreen;
