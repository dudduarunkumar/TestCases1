import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import StackNav from '../../navigation/StackNav'
interface IProps{
  navigation:{
    navigate:(arg:string)=>void
  }
}
const Login = ({navigation}:IProps) => {
  return (
    <View>
      <Text style={{textAlign:"center"}}>Login</Text>
      <TextInput style={{borderWidth:1,borderColor:"grey"}}/>
      <TouchableOpacity onPress={()=>navigation.navigate("BottomNav")}>
        <Text>LogIn</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})