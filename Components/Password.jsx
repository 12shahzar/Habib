import { TextInput,StyleSheet,Image, KeyboardAvoidingView, View,Text,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Password() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="position" keyboardVerticalOffset={0}>
    <View style={styles.header}>
    <TouchableOpacity style={styles.preButton}>
            <Image
              source={require('../assets/backarrow.png')}
              style={styles.preIcon}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Passowrd</Text>

          <TouchableOpacity style={styles.preButton}>
            <Image
              source={require('../assets/Notification.png')}
              style={styles.queIcon}
            />
          </TouchableOpacity>
    </View>
 
 <View style={styles.paswordCon}>
<Text  style={styles.headpas}>Change Password</Text>
<Text  style={styles.paslabel}>Old Password</Text>
<TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#AE2327"
        />
        <Text  style={styles.paslabel}>New Password</Text>
<TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#AE2327"
        />
        <Text  style={styles.paslabel}>Confirm Password</Text>
<TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#AE2327"
        />
 </View>
 <TouchableOpacity style={styles.inputbtn}>
        <Text style={styles.btntextlog}>Change</Text>
      </TouchableOpacity>

  </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    
  },
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
    fontSize: 25,

  },
  paswordCon:{
    height:'auto',
   
    marginTop:20,
    width:'90%',
    alignSelf:'center'

  },
  headpas:{
    color: '#AE2327',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom:5,
  },
  paslabel:
  {
    color: 'black',
    marginTop:10,
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  inputbtn: {
    width: '90%',
    height: 60,
    backgroundColor: '#AE2327',
    borderColor: 'none',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignSelf:'center',
    
  },
  btntextlog: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
 
})