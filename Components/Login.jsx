import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/Logo_login.png')}
      />
      <View style={styles.textview}>
        <Text style={styles.text}>Sign In</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email address"
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.inputbtn}>
        <Text style={styles.btntextlog}>LogIn</Text>
      </TouchableOpacity>
      <Text style={styles.textfoget}>Forgot Password?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 305,
    height: 200,
    marginBottom: '10%',
    marginTop: 20,
  },
  textview: {
    width: '90%',
  },
  text: {
    color: '#AE2327',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    height: 60,
    backgroundColor: '#F2F3F7',
    borderColor: 'none',
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 20,
  },
  inputbtn: {
    width: '90%',
    height: 60,
    backgroundColor: '#AE2327',
    borderColor: 'none',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
  },
  btntextlog: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
  textfoget: {
    color: '#AE2327',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
