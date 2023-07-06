import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import English3 from './English3'
import Completed3 from './Completed3'
import AllLesson from './AllLesson3'

const Filter3 = () => {
  return (
    <View style={{height:600}}>
    <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:30}}>
   <Text style={{fontSize:20,color:'#AE2327',fontWeight:500}}>Filters</Text>
    </View>
    <View style={{}}>
    <View  style={{marginVertical:30,padding:20,marginTop:-5}}>
    <English3/>
   
    </View>
    <View  style={{marginVertical:30,padding:20,marginTop:-45}}>
    <Completed3/>
    </View>
    <View  style={{marginVertical:30,padding:20,marginTop:-45}}>
    <AllLesson/>
    </View>
    </View>
  
    </View>
  )
}

export default Filter3

const styles = StyleSheet.create({})