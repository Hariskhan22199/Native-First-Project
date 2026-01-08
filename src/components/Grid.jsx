import { View, Text, ScrollView,  StyleSheet } from 'react-native'
import React from 'react'
const data=[{id:1, title:'item 1',img: 'https://picsum.photos/200'},
    {id:2, title:'item 2' ,img:  'https://picsum.photos/202'},
    {id:3, title:'item 3' ,img:'https://picsum.photos/204'},
    {id:4, title:'item 4',img:'https://picsum.photos/205'},
    {id:5, title:'item 5'  ,img:'https://picsum.photos/203'},
    {id:6, title:'item 6',img:'https://picsum.photos/206'},
    {id:7, title:'item 7',img:'https://picsum.photos/207'},
    {id:8, title:'item 8',img:'https://picsum.photos/208'},
    {id:9, title:'item 9',img:'https://picsum.photos/209'},
    {id:10, title:'item 10',img:'https://picsum.photos/201'},
]
const Grid = () => {
  return (
    <View style={style. mainContainer}>
      <Text >Grid</Text>
      <ScrollView>{data.map((item)=>(
        <View>
            <Text key={item.id}>{item.title}</Text>
        </View>
      ))}</ScrollView>
    </View>
  )
}
const style=StyleSheet.create({
    mainContainer:{
       flex:1,
       backgroundColor:'#f8f9fa',

    },
    texts:{
        fontSize:30,
        
        fontWeight:"bold", 
        textAlign:'center',
        marginVertical:15
    }
})

export default Grid