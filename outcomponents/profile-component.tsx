import React, { useState } from "react";
import { View,Text, Button, Modal,Image } from "react-native";





export default function ProfileComponent(){
    const [showFeed, setShowFeed] = useState(true)
    function ModalImage(){
        return(
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={true}
                    onRequestClose={() => {}}>
                    <View style={{}}>
                        <View style={{ justifyContent:"center", alignContent:"center"}}>
                            <Image style={{height:64*1.5,width:64*1.5}} source={ require('.././assets/Sale.png') }/>
                            <Text>Your Name</Text>
                            <Text>UserName</Text>
                        </View>
                    </View>
                </Modal>
            </View>)
    }

    function ShowFeed(){
        if(showFeed){return  <Text>Feed</Text>}
        else {return <Text>Followers</Text>}
    }

    return(
        <View style={{flexDirection:"column", flex:1}}>
            <View style={{flex:2}}>
                {/*Profile Stuff here*/}
                <View style={{flex:2,backgroundColor:"grey"}}>
                    <View style={{flexDirection:"row", alignItems:"stretch", margin:4}}>
                        <Text style={{flex:1}}>NavButton</Text>
                        <View style={{flex:4}}/>
                        <Text style={{flex:1}}>Search</Text>
                    </View>
                </View>
            </View>
            <View style={{flex:2,backgroundColor:"dimgrey", flexDirection:"row-reverse", alignItems:"center"}}>
                <View style={{margin:5}}><Button title='Profile' onPress={()=>{console.log("Stuff")}}  /></View>
            </View>
            
            {/*Profile Image and basic detailed centered*/}
            {/* <View style={{alignContent:"center", justifyContent:"center"}}><ModalImage/></View> */}


            <View style={{flex:8,backgroundColor:"darkgrey"}}>
                <View style={{flexDirection:"row", alignSelf:"center", margin:5}}> 
                    <Button title='Feed' onPress={()=>{setShowFeed(true)}}/>
                    <Button title='followers' onPress={()=>{setShowFeed(false)}}/>
                </View>
                <View style={{flexDirection:"row", alignSelf:"center", margin:5}}>
                    <ShowFeed/>
                </View>
            </View>
    

        </View>)
}

