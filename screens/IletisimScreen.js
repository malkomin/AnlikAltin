import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const IletisimScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>İletişim</Text>
      <Text style={styles.description}>
        Size sunduğumuz hizmetlerle ilgili yorum ve önerilerinizi bize yazabilirsiniz.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="E-posta Adresiniz"
        placeholderTextColor="#A9A9A9"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Ad Soyad"
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        style={styles.input}
        placeholder="Konu"
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Mesajınız"
        placeholderTextColor="#A9A9A9"
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>GÖNDER</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start', // Üst kısma taşımak için
    alignItems: 'center',
    paddingTop: 50, // Daha yukarı taşımak için
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FF5733', // Header rengini kullanarak
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000', // Header rengini kullanarak
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#F5F5F5', // Doldurulabilir kısımların daha görünür olması için
  },
  textArea: {
    height: 100,
  },
  button: {
    backgroundColor: '#FF5733', // Header rengini kullanarak
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default IletisimScreen;
