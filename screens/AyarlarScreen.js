import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
  ];

  return (
    <View style={styles.container}>
      <View style={styles.optionsContainer}>
        {settingsOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => navigation.navigate(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.logoutOption}
        onPress={() => navigation.navigate('Çıkış Yap')}
      >
        <Text style={styles.logoutText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  optionsContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10, // Hesap Bilgileri seçeneğini biraz daha yukarı almak için
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
    color: '#000',
  },
  logoutOption: {
    width: '100%',
    backgroundColor: '#FF5733', // Headerdaki renkten
    paddingVertical: 15,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default AyarlarScreen;
