import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'

const Submit1 = () => {
    return (
        <View style={{marginTop:30,padding:20}}>
            <View style={{marginVertical:10 ,display:"flex",justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:16,color:'#AE2327',fontWeight:500}}>Submit Assignment</Text>
            </View>
            <Text style={{fontSize:15, color:'#07354B',fontWeight:500}}>Attechments</Text>
            <View style={{display:"flex",justifyContent:'center',alignItems:'center',marginVertical:20}}>
            <Image source={require('../assets/modalpic.png')} ></Image>
            <Text>You have no Attachments Submitted</Text>

            </View>
            <Text style={{fontSize:13,fontWeight:500,color:'#07354B',marginVertical:5}}>Private Comments</Text>
            <Text style={{fontSize:12,fontWeight:500,color:'#AE2327',marginVertical:5}}>Add Comments to Mohsin Khan</Text>
       <TouchableOpacity>
            <View style={{flexDirection:'row',backgroundColor:'#AE2327',display:'flex',justifyContent:'center',alignItems:'center',height:37,borderRadius:3,marginTop:'60%'}}>
        <View>
        <Image source={require('../assets/pluss.png')} ></Image>
        </View>
        <View>
        <Text style={{color:'white',fontSize:15,marginLeft:10}}>Add Assignment</Text>
        </View>
        </View>
       </TouchableOpacity>
      <TouchableOpacity>
        <View style={{flexDirection:'row',backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center',height:37,borderRadius:3,marginTop:'5%',borderColor:'#AE2327',borderWidth:1}}>
        <View>
        <Text style={{color:'#AE2327',fontSize:15,marginLeft:10}}>Mark as Done</Text>
        </View>
        </View>
         </TouchableOpacity>
        </View>
    )
}

export default Submit1

const styles = StyleSheet.create({})
