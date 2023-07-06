import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Footer from './Footer';
import Home from './Home';

const Sidebar = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  

  const navigationView = () => (
    <ScrollView style={[styles.container, styles.navigationContainer]}>
  <View style={{flexDirection:'row',margin:16}}>
        <Image style={styles.profileimg} source={require('../assets/profileimg.png')}/>
   <View>
   <Text style={styles.name}>Hello</Text>
      <Text  style={styles.name}>Muhammad Shahzar</Text>
   </View>
   
    </View>
    
    
    <Text style={styles.paragraphhead}>Account</Text>
      <Text style={styles.paragraph}>My Teachers</Text>
      <Text style={styles.paragraph}>Academic</Text>
      <Text style={styles.paragraph}>Assignment</Text>
      <Text style={styles.paragraph}>Lesson Plan</Text>
      <Text style={styles.paragraph}>Time Table</Text>
      <Text style={styles.paragraph}>Online Exam</Text>
      <Text style={styles.paragraph}>Online Books</Text>
      <Text style={styles.paragraph}>Exam Schedule</Text>
      <Text style={styles.paragraph}>Exam Result</Text>
      <Text style={styles.paragraph}>Library</Text>
      <Text style={styles.paragraph}>Pick & Drop </Text>
      <Text style={styles.paragraph}>Hotel </Text>
      
    </ScrollView>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        
      <View style={styles.header}>
       <TouchableOpacity style={styles.preButton}
        onPress={() => drawer.current.openDrawer()}>
            <Image
              source={require('../assets/line.png')}
              style={styles.preIcon}
            />
          </TouchableOpacity>
    
          <View>
           
          <Text style={styles.text}>Muhammad</Text>
          <Text style={styles.text}>raza</Text>
          </View>
          <TouchableOpacity style={styles.preButton}>
            <Image
              source={require('../assets/Notification.png')}
              style={styles.queIcon}
            />
          </TouchableOpacity>
    </View>
       
       
      </View>
  
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
  },
  header: {
    height: 65,
    backgroundColor: '#AE2327',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    display:'flex',
    flexDirection:'row',
  
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,

  },
  navigationContainer: {
    backgroundColor: '#AE2327',
  },
  paragraph: {
    padding: 16,
    fontSize: 18,
    marginLeft:15,
    textAlign: 'Left',
    color:'white',
  },
  paragraphhead:{
    padding: 16,
    fontSize: 25,
    textAlign: 'Left',
    fontWeight: 'bold',
    color:'white',
    
  },
  profileimg:{
    height:60,
    width:60,
  },
  name:{
    color:'white',
    fontSize: 17,
    fontWeight:'bold'
  }
});

export default Sidebar;