import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';

export default function Helloscreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/hellopage_image.png')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text}>Hello and Welcome Here!</Text>
        <Text style={styles.text_para}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using ,
        </Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={{color: 'red', fontSize: 18}}>Lets Start</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '70%',
  },
  text_para: {
    color: 'white',
    fontSize: 14,
    width: '80%',
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '5%',
    lineHeight: 20,
    fontFamily: 'Montserrat',
  },
  btn: {
    backgroundColor: 'white',
    marginBottom: '15%',
    paddingLeft: 42,
    paddingRight: 42,
    paddingBottom: 8,
    paddingTop: 8,
   
  },
});
