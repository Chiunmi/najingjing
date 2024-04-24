import React from 'react';
import { View, Text, Button } from 'react-native';
import Appointment from './Appointment';

const NewAppointmentScreen = ({ route, navigation }) => {
  const { selectedDate } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>New Appointment Screen</Text>
      <Text>{selectedDate}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack(Appointment)} />
    </View>
  );
};

export default NewAppointmentScreen;