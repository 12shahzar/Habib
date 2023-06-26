import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import React from 'react';
import {Avatar, Stack} from '@rneui/themed';
export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image source={require('../assets/line.png')} />
      </View>
      <Avatar
        size={42}
        rounded
        source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
      />
      <View>
        <Text style={styles.hello}>Hello</Text>
        <Text style={styles.hello}>Muhammad Shahid</Text>
      </View>
      <View style={styles.circle1}>
        <Image source={require('../assets/notification.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    height: 70,
    backgroundColor: '#AE2327',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  circle: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: 'white',
    marginHorizontal: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hello: {
    color: 'white',
    fontSize: 16,
    paddingLeft: 10,
  },
  circle1: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginLeft: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
