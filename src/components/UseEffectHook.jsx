import React, { useState,useEffect } from 'react'
import { View, Text,Button, StyleSheet } from 'react-native'


const UseEffectHook = () => {
const[count,setCount]=useState(1)
  useEffect(() => {
    console.log("This is react hook")
  }, [])

  return (
    <View>
      <Text style={style.text}>UseStateHook</Text>
      <Text style={style.text}>{count}</Text>
      <Button title="increment" onPress={()=>setCount(count+1)}/>
      <Button title="decrement" onPress={()=>setCount(count-1)}/>
      <Button title="reset" onPress={()=>setCount(0)}/>

    </View>
  )
}
const style=StyleSheet.create({
  text:{
    textAlign:"center",
    fontSize:16,
    color:'green'
  },
  button:{}
})
export default UseEffectHook
