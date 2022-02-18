import React, { useState } from "react";
import { View } from "react-native";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";
import BasicInputText from "../SafariSolaceStyleTools/basicinputtext";
import BasicText, { TextType } from "../SafariSolaceStyleTools/basictext";





export default function RegistrationPage(props:any){
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [repeat, setRepeat] = useState("")

    return (
    <View>
        <BasicText text={"Register a new account"} textType={TextType.Title}/>
        <BasicInputText value={userName} onChangeText={setUserName} placeholder = {"UserName"}/>
        <BasicInputText value={password} onChangeText={setPassword} placeholder = {"Password"} secureTextEntry={true}/>
        <BasicInputText value={repeat} onChangeText={setRepeat} placeholder = {"UserName"} secureTextEntry={true}/>
        <BasicButton title={"Registry Account"} onPress ={()=>{}}/>
        <BasicButton title={"Login with Account"} onPress ={ ()=>props.setShowRegister(false)}/>
    </View>)
}