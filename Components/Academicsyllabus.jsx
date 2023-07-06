import { StyleSheet, Text, View,TouchableOpacity,Image, ScrollView } from 'react-native'
import React from 'react'
import Test from './Test'

export default function Academicsyllabus() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={styles.preButton}>
            <Image
              source={require('../assets/backarrow.png')}
              style={styles.preIcon}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Academic</Text>

          <TouchableOpacity style={styles.preButton}>
            <Image
              source={require('../assets/Notification.png')}
              style={styles.queIcon}
            />
          </TouchableOpacity>
      </View>
      <Test/>
     
    </View>
  )
}

const styles = StyleSheet.create({

container:{
  flex:1,
 
},
header:{
  height: 80,
    backgroundColor: '#AE2327',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    display:'flex',
    flexDirection:'row',
},
text: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 25,
},
tabheader:{
  height: 40,
  backgroundColor: 'white',
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-evenly',
  marginTop:10,
},
tabButton:{
  backgroundColor: '#AE2327',
  paddingEnd:15,
  paddingStart:15,
  borderRadius:15,
  justifyContent: 'center',
  alignItems:'center'
},
tabcontent:{
  color:'white',
},
tabButtonwh:{
  backgroundColor: 'white',
  paddingEnd:15,
  paddingStart:15,
  borderRadius:15,
  justifyContent: 'center',
  alignItems:'center',
  shadowColor: "#000000",
  shadowOpacity:  0.19,
shadowRadius: 5.62,
elevation: 6
},
tabcontentwh:{
  color:'black',
}

})