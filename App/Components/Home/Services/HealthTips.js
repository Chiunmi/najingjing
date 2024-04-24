import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import Colors from '../../../../assets/Shared/Colors'
import { LinearGradient } from 'expo-linear-gradient'

const Step = ({ title, description }) => (
  <View style={styles.stepContainer}>
    <Text style={styles.stepTitle}>{title}</Text>
    <Text style={styles.stepDescription}>{description}</Text>
  </View>
)

export default function HealthTips() {
  const [isStepsVisible, setIsStepsVisible] = useState(false)

  return (
    <View style={{ paddingBottom: 90 }}>
      <View style={styles.cardContainer}>
      <LinearGradient
              colors={["#003163", "#13072e"]}
              style={styles.cardHeader}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
        <View>
          <Text style={styles.cardTitle}>What to do when someone is bruised?</Text>
        </View>
        </LinearGradient>

        <Text style={styles.cardDescription}>It's important to know the basic first aid steps to help someone who is bruised.</Text>

        <LinearGradient 
              colors={["#003163", "#13072e"]}
              style={styles.seeMoreButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
        <TouchableOpacity onPress={() => setIsStepsVisible(!isStepsVisible)}>
        
          <Text style={styles.seeMoreText}>{isStepsVisible ? 'Minimize' : 'See More'}</Text>
        </TouchableOpacity>
        </LinearGradient>

        {isStepsVisible && (
          <ScrollView style={{ maxHeight: 400 }}>
            <Step title="1 Stop the bleeding" description="Apply pressure to the wound with a clean cloth to stop the bleeding." />
            <Step title="2 Clean the wound" description="Rinse the wound under clean water. Do not use soap as it can cause irritation." />
            <Step title="3 Apply an antibiotic ointment" description="Apply a thin layer of an antibiotic ointment to help prevent infection." />
            <Step title="4 Cover the wound" description="Cover the wound with a bandage to keep it clean and prevent infection." />
          </ScrollView>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  cardHeader: {
    backgroundColor: Colors.cobaltblue,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  cardDescription: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  seeMoreButton: {
    backgroundColor: Colors.cobaltblue,

    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  seeMoreText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepContainer: {
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  stepTitle: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  stepDescription: {
    color: '#333',
    paddingHorizontal: 20,
  },
})