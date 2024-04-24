import {Image, StyleSheet, Text, SafeAreaView, View} from 'react-native'
import React from 'react'
import sauluslogo2 from './../../assets/images/sauluslogo2.png';
import Colors from '../../assets/Shared/Colors';
import SignInWithOAuth from '../Components/SignInWithOAuth';

export default function Login() {
    return (
      <View style = {styles.appImageContainer}>
        <Image 
        source={sauluslogo2} 
        style = {styles.appImage}/>
        <View style = {styles.loginTextContainer}>
          
          <Text style = {styles.loginTextHeading}>
            Saulus
          </Text>

          <Text style = {styles.loginTextHeading2}>
            Clinic Management App
          
          </Text>

          
          <SignInWithOAuth />
          <Text style = {styles.loginQuote}>
            DEMO version Still in beta test
          </Text>
        </View>
      </View>    
    )
}

const styles = StyleSheet.create({
 
  appImageContainer: {
    alignItems: 'center',
    backgroundColor: "orange",
  },

  appImage: {
    width: 280,
    height: 450,
    resizeMode: "cover",
    marginTop: 60,
    marginBottom: -40,
    borderRadius: 60,
    borderWidth: 10,
    borderColor: "white",
    alignItems: "center",
  },

  loginTextContainer: {
    backgroundColor: Colors.white,
    padding: 45,
    alignItems: 'center',
    marginBottom: -40,
    borderRadius: 60,

  },
  

  loginTextHeading: {
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: "center",
    color: Colors.cobaltblue,
  },

  loginTextHeading2: {
    fontSize: 25,
    alignItems: "center",
    color: "orange",
    fontWeight: 'bold',
  },

  loginQuote:{
    textAlign: "center",
    fontSize: 12,
    marginTop: 10,
    marginBottom: -10,
    color: "gray",
    fontStyle: "italic",
  },

})
