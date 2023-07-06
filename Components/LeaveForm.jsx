import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView } from 'react-native'
import React from 'react'

export default function LeaveForm() {
  return (
    <View>
    <View style={styles.header}>
    <TouchableOpacity style={styles.preButton}>
         <Image
           source={require('../assets/backarrow.png')}
           style={styles.preIcon}
         />
       </TouchableOpacity>
 
       <View>
        
       <Text style={styles.text}>Leave Application</Text>
      
       </View>
       <TouchableOpacity style={styles.preButton}>
         <Image
           source={require('../assets/Notification.png')}
           style={styles.queIcon}
         />
       </TouchableOpacity>
 </View>
 <ScrollView>
<Text>
    Leave Form
</Text>
 </ScrollView>
 </View>
  )
}

const styles = StyleSheet.create({
    header: {
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
        fontSize: 22,
    
      },

})