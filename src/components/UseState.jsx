import { View, Text, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)
  return (
    <View>
     
     
      <Button title='Increment' onPress={() => setCount(count + 1)} />
      <Button title='Decrement' onPress={() => setCount(count - 1)} />
      <Text style={{fontSize: 40, fontWeight: 'bold', color: 'blue'}}>Count: {count}</Text>
    </View>
  )
}

export default UseState