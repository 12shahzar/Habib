import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image } from 'react-native'
import React from 'react'

export default function Material() {
  return (
    <>
    <ScrollView style={styles.component}>
      <View style={styles.downlod}>
        <Text style={styles.subjectname}>English</Text>
        <View style={styles.complimentcomponent}>

       
        <Text style={styles.compliment}>Subject-English solution</Text>
        <TouchableOpacity>
          <Image source={require('../assets/Downlod.png')} />
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.downlod}>
        <Text style={styles.subjectname}>English</Text>
        <View style={styles.complimentcomponent}>

       
        <Text style={styles.compliment}>Subject-English solution</Text>
        <TouchableOpacity>
          <Image source={require('../assets/Downlod.png')} />
        </TouchableOpacity>
        </View>
      </View>
     
      
      <View style={styles.downlod}>
        <Text style={styles.subjectname}>English</Text>
        <View style={styles.complimentcomponent}>

       
        <Text style={styles.compliment}>Subject-English solution</Text>
        <TouchableOpacity>
          <Image source={require('../assets/Downlod.png')} />
        </TouchableOpacity>
        </View>
      </View>
      
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
    component: {
 
        // justifyContent: 'space-around',
        width: '100%',
        flex:1,
        marginVertical: 10,
      },
      downlod:{
        // alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height:100,
        backgroundColor: 'white',
        marginVertical: 10,
        padding:5,
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
      
      },
      subjectname:{
        color: '#AE2327',
        fontSize: 24,
        fontWeight: 'bold',
      },
      complimentcomponent:{
         flexDirection:'row',
         justifyContent:'space-between',
         alignItems:'center',
    
      }
})