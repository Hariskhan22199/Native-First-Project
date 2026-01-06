
import React from 'react'
import { Text, View, Button, } from 'react-native'
import First from './src/components/First'
import JSX from './src/components/JSX'
import OnPress from './src/components/OnPress'
import UseState from './src/components/UseState'
const App = () => {
  return (
    <View>
      <Text style={{fontSize: 40, fontWeight: 'bold', color: 'blue'}}>React Native App Developer</Text>
      <Text style={{fontSize: 20, }}>Muhammad Haris Khan</Text>
      {/* <Button title='press here' onPress={() => alert('Button pressed')} /> */}
        {/* <First/> */}
        {/* <JSX/> */}
        {/* <OnPress/> */}
        <UseState/>
    </View>
    
  )
}


export default App