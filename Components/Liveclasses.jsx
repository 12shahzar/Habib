import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

export default function Liveclasses() {
  return (
    <>
      <ScrollView style={styles.component}>
        <View style={styles.Liveclassschedule}>
          <View style={styles.complimentcomponent}>
            <Text style={styles.subjectname}>English</Text>
            <Text style={styles.dated}>Jan-21-2022</Text>
          </View>
          <Text style={styles.compliment}>Ks-Willamson</Text>
          <View style={styles.detail}>
            <View>
                <Text style={styles.title}>Start Time</Text>
                <Text>12:05</Text>
            </View>
            <View>
            <Text style={styles.title}>End Time</Text>
            <Text>02:05</Text>
            </View>
            <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}> Expire </Text>
          </View>
        </View>

        <View style={styles.Liveclassschedule}>
          <View style={styles.complimentcomponent}>
            <Text style={styles.subjectname}>English</Text>
            <Text style={styles.dated}>Jan-21-2022</Text>
          </View>
          <Text style={styles.compliment}>Ks-Willamson</Text>
          <View style={styles.detail}>
            <View>
                <Text style={styles.title}>Start Time</Text>
                <Text>12:05</Text>
            </View>
            <View>
            <Text style={styles.title}>End Time</Text>
            <Text>02:05</Text>
            </View>
            <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}> Complited </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  component: {
    // justifyContent: 'space-around',
    width: '100%',
    flex: 1,
    marginVertical: 10,
  },
  Liveclassschedule: {
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: 150,
    backgroundColor: 'white',
    marginVertical: 10,
    padding: 5,
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  subjectname: {
    color: '#AE2327',
    fontSize: 24,
    fontWeight: 'bold',
  },
  complimentcomponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dated: {
    color: 'gray',
  },
  detail:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  title:{
    color: '#AE2327',
  }
});
