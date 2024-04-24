import React from 'react';
import { View, Text } from 'react-native';
import TeleMed from '../Components/Home/Services/TeleMed';
import Inventory from '../Components/Home/Services/Inventory';
import { useRoute } from '@react-navigation/native';
import PageHeader from '../Components/Shared/PageHeader';
import StudentRec from '../Components/Home/Services/StudentRec';
import Events from '../Components/Home/Services/Events';
import RequestForm from '../Components/Home/Services/RequestForm';
import HealthTips from '../Components/Home/Services/HealthTips';

export default function TeleMedScreen() {
  // Get the parameters from the route
  const param = useRoute().params;

  // Define a variable to hold the component to render
  let ComponentToRender;

  // Determine the component to render based on the categoryName parameter
  switch (param?.categoryName) {
    case 'TeleMed':
      ComponentToRender = TeleMed;
      break;
    case 'Inventory':
      ComponentToRender = Inventory;
      break;
    case 'Events':
      ComponentToRender = Events;
      break;
    case 'Student Records':
       ComponentToRender = StudentRec;
      break;
    case 'Request Form':
      ComponentToRender = RequestForm;
      break;
    case 'Health Tips':
      ComponentToRender = HealthTips;
      break;

    default:
      // If categoryName doesn't match any case, render a default message
      ComponentToRender = () => <Text>No component matching the category name found</Text>;
  }

  // Render the selected component
  return (
    <View style={{ padding: 20 }}>
      <PageHeader title={param?.categoryName} />
      <ComponentToRender />
    </View>
  );
}
