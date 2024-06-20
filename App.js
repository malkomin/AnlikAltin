import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import CurrencyScreen from './screens/CurrencyScreen';
import NotDrawerScreen from './screens/NotDrawerScreen';
import CustomHeader from './screens/base/CustomHeader';
import AyarlarScreen from './screens/AyarlarScreen';
import GoldRatesScreen from './screens/GoldRatesScreen';
import AccountInfoScreen from './screens/AccountInfoScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import DefaultCurrencyScreen from './screens/DefaultCurrencyScreen';
import ThemeScreen from './screens/ThemeScreen';
import LanguageScreen from './screens/LanguageScreen';
import RateUsScreen from './screens/RateUsScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import LegalNoticeScreen from './screens/LegalNoticeScreen';
import DeleteAccountScreen from './screens/DeleteAccountScreen';
import LogoutScreen from './screens/LogoutScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerBackground: (props) => <CustomHeader {...props} />,
      }}
    >
      <Drawer.Screen name="Güven Gold" component={MainScreen} />
      <Drawer.Screen name="Altın" component={CurrencyScreen} />
      <Drawer.Screen name="Ayarlar" component={AyarlarScreen} />
      <Drawer.Screen name="Sarrafiye İşçilikleri" component={GoldRatesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="NotDrawer" component={NotDrawerScreen} />
        <Stack.Screen name="Hesap Bilgileri" component={AccountInfoScreen} />
        <Stack.Screen name="Şifreyi Değiştir" component={ChangePasswordScreen} />
        <Stack.Screen name="Varsayılan Para Birimi" component={DefaultCurrencyScreen} />
        <Stack.Screen name="Tema" component={ThemeScreen} />
        <Stack.Screen name="Dil" component={LanguageScreen} />
        <Stack.Screen name="Bizi Değerlendirin" component={RateUsScreen} />
        <Stack.Screen name="Kişisel Verilerin Korunması" component={PrivacyPolicyScreen} />
        <Stack.Screen name="Yasal Uyarı" component={LegalNoticeScreen} />
        <Stack.Screen name="Hesabı Sil" component={DeleteAccountScreen} />
        <Stack.Screen name="Çıkış Yap" component={LogoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
