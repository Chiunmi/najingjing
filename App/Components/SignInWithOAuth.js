import React from "react";
import * as WebBrowser from "expo-web-browser";
import { 
  StyleSheet, 
  Text, Dimensions, 
  TouchableOpacity, 
  Button, 
  View} from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import Colors from '../../assets/Shared/Colors';
import { LinearGradient } from "expo-linear-gradient";
import { Modal } from "react-native";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
    useWarmUpBrowser();

const { startOAuthFlow } = useOAuth({strategy: "oauth_google"});

const onPress = React.useCallback(async() => {
    try {
        const {
            createdSessionId, signIn, signUp, setActive 
        } = await startOAuthFlow();

        if(createdSessionId) {
            setActive({ session: createdSessionId});

        } else {

        }
    } catch (err) {
        console.error ("OAuth error", err);
    }

}, []);

return (
        <TouchableOpacity 
        onPress = {onPress}>
        <LinearGradient
    colors={['#003163', '#13072e']}
    style={styles.loginButtonContainer}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
  >
    
      <Text 
        style = {styles.loginButtonText}>
        Login with Google
      </Text>
      </LinearGradient>
    </TouchableOpacity>
 );
}
export default SignInWithOAuth;

const styles = StyleSheet.create({ 
    loginButtonContainer: {
        padding: 16,
        backgroundColor: Colors.cobaltblue,
        borderRadius: 90,
        alignItems: "center",
        marginTop: 40,
        width:Dimensions.get('screen').width * 0.8,
        elevation: 7,
        shadowColor:Colors.cobaltblue,
      },
      loginButtonText:{
        fontSize: 13,
        color: "white",
        alignItems: "center",
        fontWeight: "bold",
      },
 
});
