import React from "react";
import { TextInput, View } from "react-native";
import GetColor, { borderRadius, Color, margin, paddingRadius, shadowRadius } from "./styleconfig";


export default function BasicInputText(props:any){
    const {value, onChangeText, placeholder} = props;
    if(value === undefined){throw new Error('You did not pass a value into one of your input text, pass the useState read only value here')}
    if(!onChangeText){throw new Error('You did not pass an onChangeText to one of your input text, pass the useState function here ')}
    if(!placeholder){throw new Error('You did not put a placeholder into one of your input text, please add a default value that describes what the field will be used for')}
    const keyboardType = props?.keyboardType ?? 'default';
    const editable = props?.editable ?? true;
    function fake(){}
    const onChange = props?.onChange ?? fake ;
    const onContentSizeChange = props?.onContentSizeChange ?? fake ;
    const secureTextEntry = props?.secureTextEntry ?? false

    return(
    <View style={{backgroundColor:GetColor(Color.InputText), borderRadius:borderRadius(), margin:margin(), padding:paddingRadius(), shadowRadius:shadowRadius()}}> 
        <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} secureTextEntry={secureTextEntry}
        keyboardType={keyboardType} editable={editable} onChange={onChange} onContentSizeChange={onContentSizeChange}
        style={{fontSize:20}} 
        />
    </View>)
}
