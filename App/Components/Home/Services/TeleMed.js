import React from "react";
import { View, Text, ScrollView, Linking } from "react-native";
import Colors from "../../../../assets/Shared/Colors";

const TeleMed = () => {
  const links = [
    { title: "Dentist TeleMed", url: "https://meet.google.com/fse-erof-gsq" },
    { title: "Dentist TeleMed", url: "https://example.com/dentist2" },
    { title: "Dentist TeleMed", url: "https://example.com/dentist3" },
    { title: "Dentist TeleMed", url: "https://example.com/dentist4" },
    { title: "Dentist TeleMed", url: "https://example.com/dentist5" },
  ];

  const boxStyles = {
    backgroundColor: "lightgray",
    borderRadius: 29,
    padding: 30,
    marginVertical: 10,
  };

  const textStyles = {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.cobaltblue,
    marginBottom: 5,
    textAlign: "justify",
  };

  const innerTextStyles = {
    fontSize: 16,
    color: "black",
    textAlign: "justify",
    marginHorizontal: 10,
  };

  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView>
      {links.map((link, index) => (
        <View key={index} style={boxStyles}>
          <Text style={textStyles}>{link.title}</Text>
          <Text style={innerTextStyles}>
            To join the video meeting, click this link:
          </Text>
          <Text
            style={{
              ...innerTextStyles,
              color: Colors.cobaltblue,
              textDecorationLine: "underline",
            }}
            onPress={() => handlePress(link.url)}
          >
            {link.url}
          </Text>
          <Text
            style={{ ...innerTextStyles, color: "#444444", paddingTop: 20 }}
          >
            Having trouble?{" "}
          </Text>
          <Text
            style={{ ...innerTextStyles, color: Colors.cobaltblue }}
            onPress={() => handlePress(link.url)}
          >
            Click here
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default TeleMed;
