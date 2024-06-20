import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DefaultCurrencyScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Varsayılan Para Birimi Ekranı</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DefaultCurrencyScreen;
