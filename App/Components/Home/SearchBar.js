import React, { useState } from 'react'
import { View, TextInput} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../../assets/Shared/Colors';

export default function SearchBar({setSearchText}) {
  const [searchInput, setSearchInput] = useState();

    return (
      <View style = {{marginTop: 15}}>
        <View style = {{
            display: 'flex', 
            flexDirection: "row",
            gap: 5,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: Colors.cobaltblue,
            borderRadius: 20,
            padding: 8,
            }}>
        <FontAwesome 
        name="search" 
        size={24} 
        color="lightgray"
        />
            <TextInput 
            placeholder='Search'
            onChangeText={(value) => 
            setSearchInput(value)}
            onSubmitEditing={()=> setSearchText(searchInput)}
            style = {{width: "100%", fontFamily: 'appfont-thin'}}
            />
        </View>
      </View>
    )
}
