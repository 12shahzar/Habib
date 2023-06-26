import {StyleSheet, Text, View ,Image} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.options}>
        <Image source={require('../assets/home.png')} />
      </View>
      <View style={styles.options}>
        <Image source={require('../assets/search.png')} />
      </View>
      <View style={styles.options}>
        <Image source={require('../assets/clock.png')} />
      </View>
      <View style={styles.options}>
        <Image source={require('../assets/profile.png')} />
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
