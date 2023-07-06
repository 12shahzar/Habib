import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import English2 from './English2'
import Completed2 from './Completed2'

const Filter2 = () => {
  return (
    <View style={{height:600}}>
    <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:30}}>
   <Text style={{fontSize:20,color:'#AE2327',fontWeight:500}}>Filters</Text>
    </View>
    <View style={{}}>
    <View  style={{marginVertical:30,padding:20,marginTop:-5}}>
    <English2/>
   
    </View>
    <View  style={{marginVertical:30,padding:20,marginTop:-45}}>
    <Completed2/>
    </View>
    </View>
  
    </View>
  )
}

export default Filter2

const styles = StyleSheet.create({})