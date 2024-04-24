import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import sauluslogo2 from "./../../assets/images/pculogofr.png";
import { useState } from "react";
import SignInWithOAuth from "../Components/SignInWithOAuth";
import Colors from "../../assets/Shared/Colors";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

export default function MedLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword]= useState("");
  const [errors, setErrors] = useState({});

  const validationForm = () => {
    let errors = {};
  
    const emailRegex = /\S+@pcu.edu.ph$/;
  
    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";
    if (!emailRegex.test(username)) errors.username = "Invalid email format. Please use your PCU email";
  
    setErrors(errors);
  
    return Object.keys(errors).length === 0;
  };
  const handlesubmit = () => {
    if (validationForm()) {
      console.log("Submitted", username, password);
      setUsername("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <LinearGradient
    colors={['#003163', '#13072e']}
    style={styles.container}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
  >
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 150 : 0}
    >
    
      <View style={styles.form}>
        <Image source={sauluslogo2} style={styles.image} />
        <Text
          style={{
            fontFamily: "appfont-pcu",
            fontSize: 24, // increased font size
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
            textAlign: "center",
            paddingBottom: 30, // added padding bottom
            padding: 0,
          }}
        >
          Philippine Christian University
        </Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="markdantes@pcu.edu.ph"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        {errors.username ? (
          <Text style={styles.errorText}>{errors.username} </Text>
        ) : null}
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter your Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}

        {/* <Button style = {styles.button}
              title = "Login" 
              onPress={handlesubmit}/> */}

        <TouchableOpacity
          onPress={handlesubmit}
        >
        <LinearGradient
    colors={['#003163', '#13072e']}
    style={styles.loginButtonContainer}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
  >
          <Text style={styles.loginButtonText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.loginQuote}>or</Text>

        <SignInWithOAuth />
      </View>
      <View
        style={{
          marginBottom: "12%",
          alignContent: "center",
          alignSelf: "center",
          marginTop: "12%",
        }}
      >
        <TouchableOpacity style={styles.adminloginButtonContainer}>
          <Text style={styles.loginButtonText}>Login as Admin</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    flex: 1,
    backgroundColor: "#004DAE",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    paddingTop: 20,
    borderRadius: 40,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center", // added this line
  },

  label: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: "bold",
  },

  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 50,
  },

  image: {
    width: "40%",
    height: "20%",
    alignSelf: "center",
    marginBottom: 5,
    borderRadius: 6,
  },
  button: {
    backgroundColor: "#004DAE",
    borderRadius: 90,
  },

  errorText: {
    color: "red",
    marginBottom: 10,
  },

  loginButtonText: {
    fontSize: 13,
    color: "white",
    alignItems: "center",
    fontWeight: "bold",
  },

  loginButtonContainer: {
    padding: 16,
    backgroundColor: Colors.cobaltblue,
    borderRadius: 90,
    alignItems: "center",
    marginTop: 10,
    width: Dimensions.get("screen").width * 0.8,
    elevation: 7,
    shadowColor: Colors.cobaltblue,
  },

  loginQuote: {
    textAlign: "center",
    fontSize: 12,
    marginTop: 10,
    marginBottom: -30,
    color: "gray",

  },

  adminLoginButtonContainer: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 90,
    alignItems: "center",
    marginTop: 10,
    width: Dimensions.get("screen").width * 0.8,
    alignSelf: "center",
    alignContent: "center",
  },
});