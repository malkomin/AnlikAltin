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
      <Text style={styles.header}>Döviz Kurları (TRY)</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.tableHeader}>
          <Text style={[styles.headerCell, styles.headerText]}>Birim</Text>
          <Text style={[styles.headerCell, styles.headerText]}>Alış</Text>
          <Text style={[styles.headerCell, styles.headerText]}>Satış</Text>
        </View>
        {Object.keys(currencyData.rates).map((currencyCode) => (
          <View key={currencyCode} style={styles.tableRow}>
            <Text style={[styles.cell, styles.cellText]}>{currencyCode}</Text>
            <Text style={[styles.cell, styles.cellText]}>{currencyData.rates[currencyCode].buy}</Text>
            <Text style={[styles.cell, styles.cellText]}>{currencyData.rates[currencyCode].sell}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: '#FF0000',
    textAlign: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333333',
    textAlign: 'center',
  },
  scrollView: {
    flexGrow: 1,
    paddingVertical: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#CCCCCC',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#AAAAAA',
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerText: {
    fontSize: 16,
    color: '#333333',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  cellText: {
    fontSize: 16,
    color: '#333333',
  },
});

export default CurrencyScreen;