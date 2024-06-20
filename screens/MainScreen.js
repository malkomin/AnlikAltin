import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, SafeAreaView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const CurrencyScreen = () => {
  const [currencyData, setCurrencyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCurrencyData();
  }, []);

  const fetchCurrencyData = async () => {
    try {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const data = await response.json();
      const tryRate = data.rates.TRY;
      const convertedData = {
        ...data,
        rates: Object.keys(data.rates).reduce((acc, key) => {
          acc[key] = { buy: (data.rates[key] * tryRate).toFixed(2), sell: (data.rates[key] * tryRate + 0.1).toFixed(2) }; // USD'yi TRY'ye çevir
          return acc;
        }, {}),
      };
      setCurrencyData(convertedData);
      setLoading(false);
    } catch (error) {
      console.error('Veri alınırken hata oluştu:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  if (!currencyData) {
    return (
      <View style={[styles.container, styles.errorContainer]}>
        <Text style={styles.errorText}>Veri yüklenemedi.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>Birim</Text>
          <Text style={styles.headerCell}>Alış</Text>
          <Text style={styles.headerCell}>Satış</Text>
        </View>
        {Object.keys(currencyData.rates).map((currencyCode) => (
          <View key={currencyCode} style={styles.tableRow}>
            <Text style={styles.cell}>{currencyCode}</Text>
            <Text style={styles.cell}>{currencyData.rates[currencyCode].buy}</Text>
            <Text style={styles.cell}>{currencyData.rates[currencyCode].sell}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: '#000000',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#000000',
    textAlign: 'center',
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#cccccc',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default CurrencyScreen;