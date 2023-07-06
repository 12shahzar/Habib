import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView  } from 'react-native';

const Leaveapplication = () => {
  const [activeTab, setActiveTab] = useState('Screen1');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
       <TouchableOpacity style={styles.preButton}>
            <Image
              source={require('../assets/backarrow.png')}
              style={styles.preIcon}
            />
          </TouchableOpacity>
    
          <View>
           
          <Text style={styles.text}>Leave Application</Text>
        
          </View>
          <TouchableOpacity style={styles.preButton}>
            <Image
              source={require('../assets/Notification.png')}
              style={styles.queIcon}
            />
          </TouchableOpacity>
    </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Screen1' && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress('Screen1')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'Screen1' && styles.activeTabText,
            ]}
          >
            Approved
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Screen2' && styles.activeTabButton,
          ]}
          onPress={() => handleTabPress('Screen2')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'Screen2' && styles.activeTabText,
            ]}
          >
            Pending
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {activeTab === 'Screen1' && (
          <View style={styles.screenContainer}>
            <View style={styles.applicationbox}>
            <Text  style={styles.titleapplication}>Sickness</Text>
            <Text style={styles.textapplication}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, provident odit quam placeat non ad?</Text>
           <View style={styles.row}>
            <Image source={require('../assets/applicationClendar.png')} />
            <Text style={styles.dateapplication}>Jan 14 - Feb 16</Text>
           </View>
            </View>
            <View style={styles.applicationbox}>
            <Text  style={styles.titleapplication}>Sickness</Text>
            <Text style={styles.textapplication}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, provident odit quam placeat non ad?</Text>
           <View style={styles.row}>
            <Image source={require('../assets/applicationClendar.png')} />
            <Text style={styles.dateapplication}>Jan 14 - Feb 16</Text>
           </View>
            </View>
          </View>
        )}
        {activeTab === 'Screen2' && (
          <View style={styles.screenContainer}>
          <View style={styles.applicationbox}>
          <Text  style={styles.titleapplication}>Leave for Marry</Text>
          <Text style={styles.textapplication}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, provident odit quam placeat non ad?</Text>
         <View style={styles.row}>
          <Image source={require('../assets/applicationClendar.png')} />
          <Text style={styles.dateapplication}>Jan 14 - Feb 16</Text>
         </View>
          </View>
          <View style={styles.applicationbox}>
          <Text  style={styles.titleapplication}>Leave for Marry</Text>
          <Text style={styles.textapplication}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, provident odit quam placeat non ad?</Text>
         <View style={styles.row}>
          <Image source={require('../assets/applicationClendar.png')} />
          <Text style={styles.dateapplication}>Jan 14 - Feb 16</Text>
         </View>
          </View>
        </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 22,

  },
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height:50
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#AE2327'
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
  },
  activeTabText: {
    color: '#AE2327'
  },
  contentContainer: {
    flex: 1,
  
  },
  screenContainer: {
    flex: 1,
    padding:"2%",
    
    // backgroundColor:"red",
  },
  applicationbox:{
    height:100,
    width:'98%',
    shadowColor: "#000000",
    shadowOpacity:  0.19,
  shadowRadius: 5.62,
  elevation: 6,
    backgroundColor:"white",
    borderRadius:5,
    margin:5,
    padding:5,
   
  },
  titleapplication:{
    fontSize: 18,
    color:'#AE2327',
    fontWeight:'bold',
 
  },
  textapplication:{
    fontSize: 13,
  },
  dateapplication:{
    color:'#AE2327',
    fontSize: 11,
    marginLeft:5,
    fontWeight:'bold',
  },
  row:{
    flexDirection:"row",
    paddingTop:5,
  }
});

export default Leaveapplication;
