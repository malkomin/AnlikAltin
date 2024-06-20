// screens/GoldRatesScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const data = [
  { id: '1', unit: 'Yeni Çeyrek', buy: '1.6200', sell: '1.6340' },
  { id: '2', unit: 'Eski Çeyrek', buy: '1.6050', sell: '1.6150' },
  { id: '3', unit: 'Yeni Yarım', buy: '3.2500', sell: '3.2650' },
  { id: '4', unit: 'Eski Yarım', buy: '3.1950', sell: '3.2100' },
  { id: '5', unit: 'Yeni Tam', buy: '6.4500', sell: '6.5100' },
  { id: '6', unit: 'Eski Tam', buy: '6.4100', sell: '6.4200' },
  { id: '7', unit: 'Yeni Gremese', buy: '16.1000', sell: '16.2500' },
  { id: '8', unit: 'Eski Gremese', buy: '16.0000', sell: '16.1000' },
  { id: '9', unit: 'Yeni Ata', buy: '6.6200', sell: '6.6800' },
  { id: '10', unit: 'Eski Ata', buy: '6.6000', sell: '6.6200' },
  { id: '11', unit: 'Yeni Ata5', buy: '33.1500', sell: '33.3500' },
  { id: '12', unit: 'Eski Ata5', buy: '32.9000', sell: '33.2000' },
];

const GoldRatesScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.unit}</Text>
      <Text style={styles.cell}>{item.buy}</Text>
      <Text style={styles.cell}>{item.sell}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Birim</Text>
        <Text style={styles.headerText}>Alış</Text>
        <Text style={styles.headerText}>Satış</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#EEEEEE',
    paddingVertical: 10,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: '#000',
  },
});

export default GoldRatesScreen;
