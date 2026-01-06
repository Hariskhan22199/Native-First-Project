import { View, Text,TextInput ,Button} from 'react-native'
import React, { useState } from 'react'

const InputText = () => {
    const[name,setName]=useState("")
  return (
    <View>
      <Text>Name:{name}</Text>
   <TextInput style={{borderColor:'black' ,borderWidth:2,width:340,alignSelf: 'center'} }placeholder='Enter Your Username'onChangeText={(text) => setName(text)}
   />
   <Button title="Reset name" onPress={()=>setName('')}/>
    </View>
  )
}

export default InputText