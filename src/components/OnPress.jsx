import { View, Button } from 'react-native'
import React from 'react'

const Onpress = () => {
 
  return (
    <View>
      <Button title='press here' onPress={() => alert('Button pressed')} />
        
    </View>
  )
}

export default Onpress