
import { View } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import Header from '../Components/Home/Header';
import SearchBar from '../Components/Home/SearchBar';
import Slider from '../Components/Home/Slider';
import Categories from '../Components/Home/Categories';
import Services from '../Components/Home/Services';

export default function Home({navigation}) {

    const { isLoaded, signOut} = useAuth();
    return(
      <View style = {{padding: 20, marginTop: 1}}>

      <Header />

      <SearchBar setSearchText={(value)=> console.log(value)}/>

      <Slider />
      
      <Categories />

      <Services />
      
        {/* <Button title='SignOut'

        onPress={()=> signOut()}>
        </Button> */}
      </View>
    )
}
