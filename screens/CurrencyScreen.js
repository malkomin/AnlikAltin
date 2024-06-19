import { View, Text, Button } from 'react-native';
import * as React from 'react';

// Eğer bir menü içerisinde farklı menülere geçiş yapmak istiyorsak bu şekilde "navigation" yazıp içerisindeki 
// metotları kullanıyoruz. 
export default function CurrencyScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* Yan menüyü açmak için */}
        <Button title="Open Drawer" onPress={() => navigation.openDrawer()} /> 
        {/* Farklı bir ekrana geçmek için */}
        <Button title="Go to Not Drawer" onPress={() => navigation.navigate('NotDrawer')} />
        <Text>Currency Screen</Text>
      </View>
    );
  }