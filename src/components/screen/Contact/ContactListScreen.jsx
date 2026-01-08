import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { users } from './userContactInfo'
import ContactItem from '../../ContactItem'
import { style } from './style'



const ContactListScreen = () => {
    const renderItem=({item})=><ContactItem name={item.name} email={item.email}/>

    
  return (
    <View>
    <FlatList
    data={users}
    renderItem={renderItem}
    keyExtractor={(item)=>item.id}
    contentContainerStyle={style.list}
    ListHeaderComponent={
        <Text style={style.heading}>Contact</Text>
    }
    />
    </View>
  )
}

export default ContactListScreen