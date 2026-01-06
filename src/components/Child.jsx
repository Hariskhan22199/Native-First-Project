import { View, Text } from 'react-native'
import React from 'react'

const Child = (props) => {
  return (
    <View>
      <Text style={{ fontSize: 30, color: 'black', textAlign:'center' }}>{props.data}</Text>
    </View>
  )
}

export default Child