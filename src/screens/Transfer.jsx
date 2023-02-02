import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import HomeHeader from '../components/HomeHeader';
import SignUpHeader from '../components/SignUpHeader';
import DropdownComponent from '../components/DropDownComponent';
import CustomTextInput from '../components/CustomTextInput';

const Transfer = ({navigation, route}) => {
  const [amount, setamount] = useState('');
  const [reason, setreason] = useState('');
  const typesoftransfer = [
    {label: 'Between your accounts', value: '1'},
    {label: 'to another account', value: '2'},
  ];
  const transferfrom = [
    {label: '056-12489872314587', value: '1'},
    {label: '178-12347856987125', value: '1'},
  ];
  const transferto = [{label: '047-1478954126547231', value: '1'}];
  return (
    <View style={{height: '100%'}}>
      <SignUpHeader navigation={navigation} />
      <Text
        style={{
          fontFamily: 'Roboto-Medium',
          fontSize: 20,
          fontWeight: '700',
          color: 'black',
          margin: 15,
        }}>
        Transfer
      </Text>
      <View style={{marginTop: 10}}>
        <DropdownComponent label="Type of transfer" data={typesoftransfer} />
      </View>
      <View style={{marginTop: 10}}>
        <DropdownComponent label="Transfer from" data={transferfrom} />
      </View>
      <View style={{marginTop: 10}}>
        <DropdownComponent label="Transfer to" data={transferto} />
      </View>
      <CustomTextInput
        text="Amount to transfer"
        background="white"
        textcolor="black"
        settext={setamount}
        value={amount}
      />
      <CustomTextInput
        text="Reason of transfer"
        background="white"
        textcolor="black"
        settext={setreason}
        value={reason}
      />
      <View style={styles.submit}>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('OTP', {
                mobilenum: '01018480035',
                name: 'youssef',
                previousScreen: route.name,
              });
            }}>
            <Text style={styles.buttontext}>Transfer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: '#007236',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  buttontext: {
    color: 'white',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    fontWeight: '600',
  },
  submittext: {
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    fontWeight: '700',
  },
  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    left: 5,
    right: 5,
  },
});
