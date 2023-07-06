import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import PaymentMethod from './PayMethodDropdown';
import PaymentMethod2 from './Payment2';
import SmartCard from './SmartCardDropdown';
import PKR from './PKR';
const FeeTypeDropDown = () => {
  const [text, onChangeText] = React.useState('Enter Payment Amount');

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.extra}></View>

        <View style={{marginVertical: 10}}>
          <Text style={{fontSize: 14, fontWeight: 500, color: '#474A56'}}>
            Payment method
          </Text>
          <View style={{marginTop: 10}}>
            <PaymentMethod></PaymentMethod>
          </View>
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={{fontSize: 14, fontWeight: 500, color: '#474A56'}}>
            Smart card
          </Text>
          <View style={{marginTop: 10}}>
            <SmartCard></SmartCard>
          </View>
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={{fontSize: 14, fontWeight: 500, color: '#474A56'}}>
            Payment method
          </Text>
          <View style={{marginTop: 10}}>
            <PaymentMethod2></PaymentMethod2>
          </View>
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={{fontSize: 14, fontWeight: 500, color: '#474A56'}}>
            Amount
          </Text>
          <View style={{flexDirection: 'row',marginTop: 10}}>
            <View style={{width: '60%'}}>
              <View
                style={{
                  height: 50,
                  width: '95%',
                  borderWidth: 1,
                  borderColor: '#C8D1E1',
                  borderRadius: 9,
                }}>
                <TextInput
                  style={{fontSize:16,color:'#474A56',marginLeft:10}}
                  onChangeText={onChangeText}
                  value={text}
                />
              </View>
            </View>
            <View style={{width: '38%'}}>
              <PKR />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FeeTypeDropDown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(174, 35, 39, 0.05)',
    paddingLeft: '5%',
    height: '100%',
  },

  extra: {
    marginTop: 50,
  },
});
