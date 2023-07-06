import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import English1 from './English1'

const Filter = () => {
  return (
    <View>
    <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:30}}>
   <Text style={{fontSize:20,color:'#AE2327',fontWeight:500}}>Filters</Text>
    </View>
    <View  style={{display:'flex',justifyContent:'center',alignItems:'center',marginVertical:30,padding:20,marginTop:-5}}>
    <English1></English1>
    </View>
    </View>
  )
}

export default Filter

const styles = StyleSheet.create({})