
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View>
       <View style={styles.header}>
       <TouchableOpacity style={styles.preButton}>
            <Image
              source={require('../assets/line.png')}
              style={styles.preIcon}
            />
          </TouchableOpacity>
    
          <View>
           
          <Text style={styles.text}>Muhammad</Text>
          <Text style={styles.text}>raza</Text>
          </View>
          <TouchableOpacity style={styles.preButton}>
            <Image
              source={require('../assets/Notification.png')}
              style={styles.queIcon}
            />
          </TouchableOpacity>
    </View>
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
        fontSize: 18,
    
      },

})

