import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Colors from "../../../../assets/Shared/Colors";

export default function RequestForm() {
  return (
    <ScrollView style={{ paddingTop: 20 }} contentContainerStyle={{ paddingBottom: 50 }}>
      <Text style={styles.text}>RequestForm 1</Text>
      <View style={{ padding: 20 }}>
        <View style={styles.inner}>
          <Text style={[styles.innerText, { fontWeight: "bold", color: Colors.cobaltblue }]}>
            RequestForm 1
          </Text>
          <Text style={styles.innerText}>
            dsadasdasdfgsfsdfs description lorem ipsumasdaksdj aksjd as
            ashdkasdkj asdad
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <TouchableOpacity style={[styles.button, { backgroundColor: Colors.cobaltblue }]}>
              <Text style={styles.buttonText}>Download</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { marginLeft: 10 }]}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.text}>RequestForm 2</Text>
      <View style={{ padding: 20 }}>
        <View style={styles.inner}>
          <Text style={[styles.innerText, { fontWeight: "bold", color: Colors.cobaltblue }]}>
            RequestForm 2
          </Text>
          <Text style={styles.innerText}>
            asdasdasdfgsfsdfs description lorem ipsumasdaksdj aksjd as
            ashdkasdkj asdad
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <TouchableOpacity style={[styles.button, { backgroundColor: Colors.cobaltblue }]}>
              <Text style={styles.buttonText}>Download</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { marginLeft: 10 }]}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.text}>RequestForm 3</Text>
      <View style={{ padding: 20 }}>
        <View style={styles.inner}>
          <Text style={[styles.innerText, { fontWeight: "bold", color: Colors.cobaltblue }]}>
            RequestForm 3
          </Text>
          <Text style={styles.innerText}>
            zxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxczxc
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <TouchableOpacity style={[styles.button, { backgroundColor: Colors.cobaltblue }]}>
              <Text style={styles.buttonText}>Download</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { marginLeft: 10 }]}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
  },

  inner: {
    borderRadius: 10,
    backgroundColor: "lightgray",
    padding: 10,
  },

  innerText: {
    color: "black",
    fontSize: 16,
    paddingVertical: 7,
  },

  button: {
    backgroundColor: "green",
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },

  buttonText: {
    color: Colors.white,
    fontSize: 16,
  },
});