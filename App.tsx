import { StatusBar } from 'expo-status-bar';
import React, { createContext, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ProfileComponent from './outcomponents/profile-component';
import GetColor, { Color , Theme} from './SafariSolaceStyleTools/styleconfig';
import { themeContext, ThemeContextInterface } from './SafariSolaceStyleTools/themecontext';
import StartUpPage from './z-pages/startup-screen';

export default function App() {

  const [pageindex, setPageIndex] = useState(0)
  
  const themeContextObject:ThemeContextInterface = {theme:Theme.default,setTheme:()=>{}}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"column",
      backgroundColor: 'white',
      alignContent:"space-around",
      
      
    },
  });

  function Display(){

    switch(pageindex){
      case 0:{ return <><ProfileComponent/></>}
      case 1:{ return <><Text>testing</Text></>}
      case 2:{ return <><Text>testing</Text></>}
      case 3:{ return <><Text>testing</Text></>}
      case 4:{ return <><Text>testing</Text></>}
      case 5:{ return <><Text>testing</Text></>}
      default :{ return <><Text>testing</Text></>}
    }
  }


  return (
    <themeContext.Provider value = { themeContextObject }>
      <View style={styles.container}>
          <ProfileComponent/>
        </View>
    </themeContext.Provider>
  );
}


