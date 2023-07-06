import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView  } from 'react-native';

const Leaveapplication = () => {
  const [activeTab, setActiveTab] = useState('Screen1');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
   
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
          <ScrollView style={styles.screenContainer}>
            <View style={styles.applicationbox}>
            <Text  style={styles.titleapplication}>Sickness</Text>
            </View>
          </ScrollView>
        )}
        {activeTab === 'Screen2' && (
          <ScrollView style={styles.screenContainer}>
            <Text>Pending</Text>
          </ScrollView>
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
    
    backgroundColor:"red",
  },
  applicationbox:{
    height:100,
    width:'100%',
    padding:2,
    backgroundColor:"white",
  },
  titleapplication:{
    color:'#AE2327'
  }
});

export default Leaveapplication;