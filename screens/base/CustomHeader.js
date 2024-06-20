import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Header } from '@react-navigation/elements';
import { StyleSheet} from 'react-native';
const CustomHeader = (props) => {
  // Burada siz styling flan çözersiniz. Ben aklımı yitirdim. 
  return (
    <LinearGradient
    colors={['#FD4601', '#FF7E01']}
    style={[StyleSheet.absoluteFill, { height: Header.HEIGHT }]}
  />
  );
};

export default CustomHeader;


