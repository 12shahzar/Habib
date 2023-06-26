import {
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Text,
    View,
    Dimensions,
    Image,
  } from 'react-native';
  import React from 'react';
  
  export default function Instruction3() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/Instruction3.png')}
          resizeMode="cover"
          style={styles.image}></ImageBackground>
        <View style={styles.text_container}>
          <Text style={styles.text}>Find Your Favorite Subject</Text>
          <Text style={styles.text_para}>
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters,
          </Text>
          <View style={styles.opt_container}>
            <Text style={styles.text_skip}>Skip</Text>
            <TouchableOpacity style={styles.nextButton}>
              <Image
                source={require('../assets/Nexticon.png')}
                style={styles.nextIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 0.6,
      resizeMode: 'cover',
    },
    text_container: {
      flex: 0.4,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    text: {
      color: '#AE2327',
      fontSize: 24,
      fontWeight: 'bold',
    },
    text_skip: {
      color: '#AE2327',
      fontSize: 18,
      textDecorationLine: 'underline',
    },
    text_para: {
      color: '#929292',
      fontSize: 14,
      textAlign: 'center',
      width: '90%',
    },
    opt_container: {
      height: 90,
      width: '80%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    nextButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    nextIcon: {
      width: 50,
      height: 50,
      borderRadius: 50,
      resizeMode: 'cover',
    },
  });
  