import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DeleteAccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hesabı Sil Ekranı</Text>
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

export default DeleteAccountScreen;
