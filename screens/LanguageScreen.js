import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LanguageScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Dil Ekranı</Text>
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

export default LanguageScreen;
