import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import CurrencyScreen from './screens/CurrencyScreen';
import NotDrawerScreen from './screens/NotDrawerScreen';
import CustomHeader from './screens/base/CustomHeader';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerNavigator() {
  return (
    // initialRouteName burada uygulamanın ilk açılacağı ekran demek
    <Drawer.Navigator initialRouteName="Main" screenOptions={{
      headerBackground: (props) => <CustomHeader />,
    }}> 
    {/* Ekranları burada ekliyoruz. Menüde olmasını istediğimiz her ekranı buraya isim ile giriyoruz. */}
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="Currency" component={CurrencyScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator >
       {/* Drawer burada bizim yan menüye koymak istediğimiz ekranları topluyor. Yandan açılan menüye bir şey eklemek istersek DrawerNavigator 
       içerisinde ekliyoruz. */}
      <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
      {/* Eğer olur da yan menüde göstermek istemezsek ama uygulama içerisinde bir tuşa basarak farklı bir ekrana yönlendirme yapmak istersek 
      buraya eklememiz gerekiyor. Currency içerisindeki buton NotDrawer ekranına gidecek */}
      <Stack.Screen name="NotDrawer" component={NotDrawerScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}