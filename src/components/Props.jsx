import { View, Text, Button } from 'react-native'
import React from 'react'
import Child from './Child'
import { useState } from 'react'
const Props = () => {
    const [count, setCount] = useState(0)
  return (
    <View>
     
      <Button title='Increment' onPress={() => setCount(count + 1)} />
      <Button title='Decrement' onPress={() => setCount(count - 1)} />
      <Child data={count}/>
    </View>
   
  )
}

export default Props