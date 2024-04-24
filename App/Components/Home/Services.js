import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const items = [
  {
    icon: "phone",
    name: "TeleMed",
  },
  {
    icon: "event",
    name: "Events",
  },
  {
    icon: "favorite",
    name: "Student Records",
  },
  {
    icon: "assignment",
    name: "Request Form",
  },
  {
    icon: "tips-and-updates",
    name: "Health Tips",
  },
];

export default function Services() {
  const [selectedItem, setSelectedItem] = useState(null); // State for managing selected item

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: "#eee" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.row}>
          {items.map((item, index) => (
            <LinearGradient
              colors={["#003163", "#13072e"]}
              style={styles.item}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(`Telemed-screen`, {
                    categoryName: `${item.name}`,
                  })
                }
                key={index}
              >
                <View style={styles.itemIconTransparent}>
                  <MaterialIcons name={item.icon} size={36} color="#fff" />
                </View>
                <Text style={styles.itemName}>{item.name}</Text>
              </TouchableOpacity>
            </LinearGradient>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 20, // Adjust this value as needed
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    width: "30%",
    height: 120,
    borderRadius: 12,
    backgroundColor: "#0047AB",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: "1%",
    padding: 12,
  },
  itemIconTransparent: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  itemName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
    marginTop: 8,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  itemSelected: {
    backgroundColor: "#0047AB",
  },
});
