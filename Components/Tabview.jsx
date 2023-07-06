import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Tabview = () => {
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
            Screen 1
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
            Screen 2
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {activeTab === 'Screen1' && (
          <View style={styles.screenContainer}>
            <Text>Screen 1 Content</Text>
          </View>
        )}
        {activeTab === 'Screen2' && (
          <View style={styles.screenContainer}>
            <Text>Screen 2 Content</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderBottomColor: 'blue',
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
  },
  activeTabText: {
    color: 'blue',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tabview;
