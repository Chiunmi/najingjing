import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { CalendarList } from "react-native-calendars";
import { AntDesign } from '@expo/vector-icons';
import { LocaleConfig } from "react-native-calendars";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

LocaleConfig.locales["en"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  today: "Today",
};

LocaleConfig.defaultLocale = "en";

const Appointment = () => {
  const navigation = useNavigation();

  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [markedDates, setMarkedDates] = React.useState({});
  const [addIconVisible, setAddIconVisible] = React.useState(false);
  const [showNewAppointmentScreen, setShowNewAppointmentScreen] = useState(false);

  const handleDayPress = (day) => {
    console.log("selected day", day);
    setCurrentDate(day.dateString);
  };

  const handleScrollEnd = () => {
    // setCurrentDate(new Date());
  };

  const handleAddIconPress = () => {
    navigation.navigate('NewAppointmentScreen', { selectedDate: currentDate });
  };

  const handleBackPress = () => {
    setShowNewAppointmentScreen(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#003163", "#13072e"]}
        style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10}}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "white", marginRight: 150}}>Appointments</Text>
          <TouchableOpacity onPress={handleAddIconPress}>
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <CalendarList
        onDayPress={(day) => {
          console.log("selected day", day);
          setCurrentDate(day.dateString);
          setMarkedDates((prevMarkedDates) => {
            const newMarkedDates = { ...prevMarkedDates };
            Object.keys(newMarkedDates).forEach((key) => {
              if (key !== day.dateString) {
                delete newMarkedDates[key];
              }
            });
            newMarkedDates[day.dateString] = { marked: true, dotColor: "gray" };
            return newMarkedDates;
          });
        }}
        markedDates={markedDates}
        scrollEnabled
        current={currentDate}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
        }}
        onMomentumScrollEnd={handleScrollEnd}
      />
      <TouchableOpacity
        style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 50 }}
        onPress={() => setCurrentDate(new Date())}
      >
        <Text style={{ textAlign: "center", lineHeight: 50 }}>
          Return to current date
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Appointment;