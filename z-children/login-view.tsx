import React, { useState } from "react";
import { View } from "react-native";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";
import BasicInputText from "../SafariSolaceStyleTools/basicinputtext";
import BasicText, { TextType } from "../SafariSolaceStyleTools/basictext";



export default function LoginView(props:any){
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [noUserError, setNoUserError] = useState(false)


    function ShowUserError(){
        if(noUserError) return <BasicText text={"User Not Found"}/>
        else return <></>
    }

    return(
    <View>
        <BasicText text={"Welcome View"} textType={TextType.Title}/>
        <BasicInputText value={userName} onChangeText={setUserName} placeholder = {"UserName"}/>
        <BasicInputText value={password} onChangeText={setPassword} placeholder = {"Password"} secureTextEntry={true}/>
        <ShowUserError/>
        <BasicButton title={"Login"} onPress={()=>{}}/>
        <BasicButton title={"Register Account"} onPress={ ()=>props.setShowRegister(true)}/>
    </View>)
}