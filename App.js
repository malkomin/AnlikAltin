import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CurrencyScreen from './CurrencyScreen'; // CurrencyScreen dosyasının bulunduğu yol

export default function App() {
  const handleMenuPress = () => {
    Alert.alert('Menü butonuna tıkladınız!! ZORT');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ff7e5f', '#feb47b']} // Geçiş yapmak istediğiniz renkleri buraya ekleyin
        style={styles.headerContainer}
      >
        <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
          <Text style={styles.menuButtonText}>...</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Başlık</Text>
        <Image
          source={{ uri: 'https://purepng.com/public/uploads/large/purepng.com-gold-coinsflatcoinsroundmetalgoldclipart-1421526479508ifey0.png' }} // Logonun URL'sini buraya ekleyin
          style={styles.logo}
        />
      </LinearGradient>
      <View style={styles.contentContainer}>
        <CurrencyScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 50, // Cihazın durum çubuğuna göre başlık aşağıda olacak şekilde
    paddingBottom: 10,
    width: '100%',
  },
  menuButton: {
    padding: 10,
  },
  menuButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  logo: {
    width: 30,
    height: 30,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    margin: 20,
    borderRadius: 5,
  },
  valuesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#eaeaea',
  },
  valueItem: {
    alignItems: 'center',
  },
  valueLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  valueText: {
    fontSize: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
