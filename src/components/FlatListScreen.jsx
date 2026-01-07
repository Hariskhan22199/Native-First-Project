import { View, Text, FlatList,Image } from 'react-native'
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

const FlatListScreen = () => {
    const  renderItem=({item})=>(
        <View>
            <Text>{item.title}</Text>
            <Image
        source={{ uri: item.img }}
        style={{ width: 100, height: 100 }}
      />
        </View>
    )
  return (
    <View>
      <Text>Fla</Text>
      <FlatList 
      data={data}
      renderItem={renderItem}
      keyExtractor={item=>item.id}
      />
    </View>
  )
}

export default FlatListScreen