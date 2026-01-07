// import { View, Text, SectionList,StyleSheet } from 'react-native'
// import React from 'react'
// const listItem=[{title:'Fruits',
//     data:[{id:1, name:'Apple'},
//         {id:2, name:'Grape'},
//         {id:3, name:'Peach'},
//         {id:4, name:'Avacado'},
//         {id:5, name:'Orange'},
//     ]
// },
// {title:'Vegetables',
//     data:[{id:6, name:'Potato'},
//         {id:7, name:'LadyFinger'},
//         {id:8, name:'Tomato'},
//         {id:9, name:'Turnip'},
       
//     ]
// }
// ]
// const renderSectionHeader=({section})=>(
//     <View>
//         <Text>{section.title}</Text>
//         <Text>{section.name}</Text>
//     </View>
// )

// const SectionListScreen = () => {
//     const renderItem=({item})=>(
//         <View>
//             <Text>{item.title}</Text>
//             <Text>{item.name}</Text>
//         </View>
//     )
//   return (
//     <View style={styles.container}>
//       <Text>SectionListScreen</Text>
//       <SectionList
//       sections={listItem}
//       renderItem={renderItem}
//       renderSectionHeader={renderSectionHeader}
//       keyExtractor={(item)=>item.id.toString()}
//       />
//     </View>
//   )
// }
//  const styles=StyleSheet.create({
//     container:{
//         backgroundColor:"#f0f0f0",
//         color:"white",
//         padddingTop:15,
//         alignContent:"center",
//         textAlign:"center"
//     }
//  })
// export default SectionListScreen
import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const listItem = [
  {
    title: 'Fruits',
    data: [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Grape' },
      { id: 3, name: 'Peach' },
      { id: 4, name: 'Avocado' },
      { id: 5, name: 'Orange' },
    ],
  },
  {
    title: 'Vegetables',
    data: [
      { id: 6, name: 'Potato' },
      { id: 7, name: 'LadyFinger' },
      { id: 8, name: 'Tomato' },
      { id: 9, name: 'Turnip' },
    ],
  },
];

const SectionListScreen = () => {
  const renderSectionHeader = ({ section }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SectionList Example</Text>
      <SectionList
        sections={listItem}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  sectionHeader: {
    backgroundColor: '#87CEFA', // Light blue
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 10,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  itemContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15,
    borderRadius: 8,
    elevation: 2, // For shadow on Android
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default SectionListScreen;
