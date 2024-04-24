import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Schedule from '../Screens/Schedule';
import Profile from '../Screens/Profile';
import { FontAwesome } from '@expo/vector-icons';
import Scanner from '../Screens/Scanner';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../assets/Shared/Colors';
import HomeNavigation from './HomeNavigation';
import Appointment from '../Screens/Appointment';
// import Inventory from '../Components/Home/Services/Inventory';
import Inventory from '../Screens/Inventory';

const Tab = createBottomTabNavigator();

export default function TabNavigation({ darkMode, setDarkMode }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.cobaltblue,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome name="home" size={size} color={focused ? Colors.cobaltblue : color} />
          ),
        }}
      />

      {/* <Tab.Screen
        name="Scanner"
        component={Scanner}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="qrcode-scan" size={size} color={focused ? Colors.cobaltblue : color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Inventory"
        component={Inventory}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="qrcode-scan" size={size} color={focused ? Colors.cobaltblue : color} />
          ),
        }}
      />



      <Tab.Screen
        name="Calendar"
        component={Appointment}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome name="calendar" size={size} color={focused ? Colors.cobaltblue : color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome name="user" size={size} color={focused ? Colors.cobaltblue : color} />
          ),
        }}
      >
        {(props) => <Profile {...props} darkMode={darkMode} setDarkMode={setDarkMode} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
