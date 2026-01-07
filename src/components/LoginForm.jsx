import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import {useState} from 'react'
import React from 'react'

const LoginForm = () => {
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const handleLogin=()=>{
        console.log({messsage:'Email',name});
        console.log({messsage:'Password',password});
        setName('');
        setPassword('');

    }
  return (
    <View>
      <Text style={style.heading}>Login</Text>
      <TextInput 
      style={style.input}
      placeholder='Email'
      value={name}
      onChangeText={setName}
      keyboardType='email-address'
      autoCapitalize='none'
      />
      <TextInput
      placeholder='Passsword'
      style={style.input}
      value={password}
      onChangeText={setPassword}
      secureTextEntry
      />
      <TouchableOpacity style={style.button} onPress={handleLogin}>
        <Text style={style.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}
const style=StyleSheet.create({
    container:{
        justifyContent:"center",
        paddingHorizontal:20,
        paddingTop:40,
        backgroundColor:'#f0f0f0'
    },
   heading:{
    fontSize:40,
    fontWeight:'bold',
    marginBottom:30,
    textAlign:'center',
    color:'#333'
   }, 
   input:{
    height:50,
    borderColor:"#ccc",
    borderWidth:1,
    marginBottom:20,
    paddingHorizontal:155,
    borderRadius:10,
    backgroundColor:'#fff',
    fontSize:20,
    color:'#333'
   },
   button:{
    backgroundColor:'#6200EE',
    paddingVertical:15,
    borderRadius:10,
    alignItems:'center',
  
   },
   buttonText:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold'
   }
})
export default LoginForm

