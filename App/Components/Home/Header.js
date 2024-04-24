import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
  const {isLoaded, isSignedIn, user} =useUser();
  
  if(!isLoaded||!isSignedIn)
  {
    return null
  }
    return (
      <View style = {{
        display:'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: "space-between",
      }}>
      <View style = {{
          display: "flex", 
          flexDirection: 'row',
          gap: 7,
          alignItems: "center",
          }}>
          <Image 
          source={{uri: user.imageUrl}} 
          style = {styles.imageContainer}
        />
      <View>
      <Text style ={{fontFamily: 'appfont'}}>Welcome!</Text>
          <Text
            style = {{
              fontSize: 18, 
              fontFamily: 'appfont-bold',
              }}> 
            {user.firstName} 
          </Text>
      </View>
        
      </View>
      <MaterialIcons name="notifications-none" size={30} color="gray" />
      </View>
    )
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 45,
    width: 45,
    borderRadius: 99,
  }

});

