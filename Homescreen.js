import React from 'react';
import { View, StyleSheet } from 'react-native';
import CurrencyScreen from './CurrencyScreen'; // CurrencyScreen dosyasının bulunduğu yol

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ana Sayfa</Text>
      <View style={styles.content}>
        <Text>Burada başka içerikler olabilir...</Text>
        <CurrencyScreen /> {/* Döviz kurları burada gösterilecek */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
