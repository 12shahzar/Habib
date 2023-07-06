

import {StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import React from 'react';
import Sidebar from './Sidebar';
import Home from './Home';

export default function Footer() {
  return (
    <View>
  
    <View style={styles.footer}>
      <TouchableOpacity style={styles.options}>
        <Image source={require('../assets/home.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.options}>
        <Image source={require('../assets/search.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.options}>
        <Image source={require('../assets/clock.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.options}>
        <Image source={require('../assets/profile.png')} />
      </TouchableOpacity>
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#FFFFFF',
    height: 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  options: {
    backgroundColor: '#FFFFFF',
    width: 60,
    height: 60,
    marginHorizontal: 20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'

  },
 
});



