import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'

const SubmitAssignment = () => {
    return (
        <View style={{marginTop:30}}>
            <View style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:16,color:"#AE2327",fontWeight:500}}>Submit Assignment</Text>
            <View  style={{flexDirection:'row' ,justifyContent:'space-between' ,marginVertical:30}}>
              <View style={{display:"flex",justifyContent:'center',alignItems:'center',width:'33%'}}>
            <TouchableOpacity>
              <Image source={require('../assets/drive.png')} ></Image>
              </TouchableOpacity>
              <Text style={{fontSize:13,color:'#07354B',marginVertical:10}}>Add From Drive</Text>
            </View>
            <View style={{display:"flex",justifyContent:'center',alignItems:'center',width:'33%'}}>
           <TouchableOpacity>
            <Image source={require('../assets/camera.png')} ></Image>
            </TouchableOpacity>
            <Text style={{fontSize:13,color:'#07354B',marginVertical:10}}>Camera</Text>
            </View>
            <View style={{display:"flex",justifyContent:'center',alignItems:'center',width:'33%'}}>
            <TouchableOpacity>
            <Image source={require('../assets/profile.png')} ></Image>
            </TouchableOpacity>
            <Text style={{fontSize:13,color:'#07354B',marginVertical:10}}>Scanner</Text>
            </View>
            </View>          
            <View  style={{flexDirection:'row' ,justifyContent:'space-between' ,marginBottom:30}}>
            <View style={{display:"flex",justifyContent:'center',alignItems:'center',width:'33%'}}>
          <TouchableOpacity>
            <Image source={require('../assets/upload.png')} ></Image>
            </TouchableOpacity>
            <Text style={{fontSize:13,color:'#07354B',marginVertical:10}}>Upload</Text>
          </View>
          <View style={{display:"flex",justifyContent:'center',alignItems:'center',width:'33%'}}>
         <TouchableOpacity>
          <Image source={require('../assets/link.png')} ></Image>
         </TouchableOpacity>
          <Text style={{fontSize:13,color:'#07354B',marginVertical:10}}>Insert Link</Text>
          </View>
          <View style={{display:"flex",justifyContent:'center',alignItems:'center',width:'33%'}}>
          <TouchableOpacity>
          <Image source={require('../assets/plus.png')} ></Image>
          </TouchableOpacity>
          <Text style={{fontSize:13,color:'#07354B',marginVertical:10}}>Create</Text>
          </View>
          </View>  
            </View>
        </View>
    )
}

export default SubmitAssignment

const styles = StyleSheet.create({})
