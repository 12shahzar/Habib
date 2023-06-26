import { StyleSheet,Image,ImageBackground, Text, View, Dimensions } from 'react-native'
import React from 'react'


export default function Helloscreen() {
    const heightDimension = Dimensions.get('window').height;
    const widthDimension = Dimensions.get('window').width;
  
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/hellopage_image.png')} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: 'center',
      },
      text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
      },
})