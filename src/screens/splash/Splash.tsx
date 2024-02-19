import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import { useSelector } from "react-redux";

export interface IProps{
    navigation:{
        navigate:(arg:string)=>void
    }
}

const Splash = (props:IProps) => {

    const splashText=useSelector((state:{splash:{text:string}})=>state.splash.text)
    const handleSplash=()=>{
        setTimeout(() => {
            props.navigation.navigate("Login")
        }, 2000);
    }
    useEffect(()=>{
        handleSplash()
    })
  return (
    <View>
      <Text>{splashText}</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})