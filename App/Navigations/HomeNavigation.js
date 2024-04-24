import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TeleMedScreen from '../Screens/TeleMedScreen';
import Home from '../Screens/Home';
import Appointment from '../Screens/Appointment';
import NewAppointmentScreen from '../Screens/NewAppointmentScreen';
import Add from '../Components/Home/Services/Add'
import IndexScreen from '../Components/Home/Services/IndexScreen'
import Inventory from '../Screens/Inventory';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions ={{headerShown: false}}>
        <Stack.Screen name ='Home' component = {Home} />
        <Stack.Screen name ='Telemed-screen' 
        component = {TeleMedScreen} />
        <Stack.Screen name ='Appointment' 
        component = {Appointment} />
        <Stack.Screen name ='NewAppointmentScreen' 
        component = {NewAppointmentScreen} />
        <Stack.Screen name='Add'
         component={Add} /> 
        <Stack.Screen name='Inventory'
        component={Inventory}/>
        <Stack.Screen name='IndexScreen'
        component={IndexScreen}/>
    </Stack.Navigator>
  )
}