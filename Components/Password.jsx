import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ImageBackground,
    TextInput,
  } from 'react-native';
import React from 'react'

const Password = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperprofile}>
        <View style={styles.subupperprofile}>
          <TouchableOpacity style={styles.preButton}>
            <Image
              source={require('../assets/backarrow.png')}
              style={styles.preIcon}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Password</Text>

          <TouchableOpacity style={styles.preButton}>
            <Image
              source={require('../assets/Notification.png')}
              style={styles.queIcon}
            />
          </TouchableOpacity>
        </View>
       
       
      </View>
<View  style={styles.lowerprofile}> 

</View>
      
    </View>
  )
}

export default Password

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        
    
      },
      upperprofile: {
        flex: 0.1,
        backgroundColor: '#AE2327',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
      
      },
      subupperprofile: {
        height: 50,
        width: '95%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
      },
      preButton: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    
      preIcon: {
        width: 60,
        height: 60,
        top: 10,
      },
      queIcon: {
        width: 70,
        height: 70,
        top: 10,
      },
      text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        
      },
      lowerprofile:{
        flex: 0.8,
        width:"90%",
        marginLeft:"5%",
        backgroundColor:'red'
     
      },
   
   
})