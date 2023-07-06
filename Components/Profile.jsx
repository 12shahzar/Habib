import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';

export default function Profile() {
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
          <Text style={styles.text}>Profile</Text>

          <TouchableOpacity style={styles.preButton}>
            <Image
              source={require('../assets/Questionmark.png')}
              style={styles.queIcon}
            />
          </TouchableOpacity>
        </View>
        <View>
          <ImageBackground
            source={require('../assets/profileimg.png')}
            resizeMode="contain"
            style={styles.profileimg}></ImageBackground>
        </View>
        <Text style={styles.text_name}>Shahzar Raza</Text>
      </View>
      <ScrollView style={styles.lowerprofile}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Emma Watson"
          placeholderTextColor="#AE2327"
        />
        <Text style={styles.label}>First name</Text>
        <TextInput
          style={styles.input}
          placeholder="Emma"
          placeholderTextColor="#AE2327"
        />
        <Text style={styles.label}>Last name</Text>
        <TextInput
          style={styles.input}
          placeholder="Watson"
          placeholderTextColor="#AE2327"
        />
        <Text style={styles.label}>Date of Birth</Text>
        <TextInput
          style={styles.input}
          placeholder="25-25-2020"
          placeholderTextColor="#AE2327"
        />
        <Text style={styles.label}>Roll No</Text>
        <TextInput
          style={styles.input}
          placeholder="1125"
          placeholderTextColor="#AE2327"
        />
        <Text style={styles.label}>Registration No</Text>
        <TextInput
          style={styles.input}
          placeholder="123456"
          placeholderTextColor="#AE2327"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'absolute'
    

  },
  upperprofile: {
    height: 200,
    backgroundColor: '#AE2327',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    alignItems: 'center',
  
    
  },
  subupperprofile: {
    height: 50,
    width: '81%',
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
    top: 5,
  },
  queIcon: {
    width: 30,
    height: 30,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    left: -20,
  },
  text_name: {
    color: 'white',
    fontSize: 20,
  },
  profileimg: {
    height: 90,
    width: 90,
    borderRadius: 50,
  },
  lowerprofile: {
    flex: 0.7,
    width: '90%',
    marginLeft: '5%',
    marginTop: '10%',
  },
  input: {
    width: '90%',
    height: 40,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  label: {
    color: 'black',
    marginTop: 12,
  },
});
