import { View, Text } from 'react-native'
import React from 'react'
import { style } from './screen/Contact/style'

const ContactItem = ({name,email}) => {
  return (
    <View style={style.items}>
      <Text style={style.name}>{name}</Text>
      <Text style={style.email}>{email}</Text>
    </View>
  )
}

export default ContactItem