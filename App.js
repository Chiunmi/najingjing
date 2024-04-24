import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import MedLogin from './App/Screens/MedLogin';
import TeleMed from './App/Components/Home/Services/TeleMed'; // Import TeleMed screen
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { EventRegister } from 'react-native-event-listeners';
import theme from './App/theme/theme';
import themeContext from './App/theme/themeContext';

export default function App() {
  
  const [darkMode, setDarkMode] = useState(false);
 
  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data);
    });

    return () => {
      EventRegister.removeEventListener('ChangeTheme', listener);
    }
  }, []);


  const Stack = createStackNavigator();

  const [fontsLoaded] = useFonts({
    'appfont': require('./assets/fonts/Outfit-Regular.ttf'),
    'appfont-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'appfont-semi': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'appfont-thin': require('./assets/fonts/Outfit-Thin.ttf'),
    'appfont-pcu': require('./assets/fonts/pcufont.ttf'),
  });

  if (!fontsLoaded) {
    // Font loading indicator could be displayed here
    return null;
  }

  return (
    <themeContext.Provider value = {darkMode === true? theme.dark : theme.light}>

 

    <ClerkProvider publishableKey="pk_test_dml0YWwtYWxiYWNvcmUtNDEuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <SafeAreaView style={styles.container}>
        {/* StatusBar visibility */}
        <StatusBar />
        <SignedIn>
          <NavigationContainer>
            <TabNavigation darkMode={darkMode} setDarkMode={setDarkMode} />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <MedLogin />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>

         
    </themeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
