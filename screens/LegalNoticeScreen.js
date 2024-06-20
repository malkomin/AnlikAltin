import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LegalNoticeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Yasal Uyarı Ekranı</Text>
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

export default LegalNoticeScreen;
