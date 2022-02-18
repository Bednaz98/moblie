import React, { useState } from "react";
import { View } from "react-native";
import BasicText from "../SafariSolaceStyleTools/basictext";
import LoginView from "../z-children/login-view";
import RegistrationPage from "../z-children/register-view";



export default function StartUpPage(){
    const [showRegister, setShowRegister] = useState(false)


    function SwitchDisplay(){
        if(showRegister) return  < RegistrationPage setShowRegister={setShowRegister}/>
        else return <LoginView setShowRegister={setShowRegister}/>

    }

    return (
    <View>
        <SwitchDisplay/>
    </View>)
}