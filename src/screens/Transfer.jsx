import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MyAppText from '../components/MyAppText';

import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import HomeHeader from '../components/HomeHeader';
import SignUpHeader from '../components/SignUpHeader';
import DropdownComponent from '../components/DropDownComponent';
import CustomTextInput from '../components/CustomTextInput';
import {addtransaction} from '../firebase/FirestoreDB';
import {useRoute} from '@react-navigation/native';
import {fetchusers} from '../redux/beneficiersSlice';
import {fetchuserdata} from '../redux/userSlice';
import {
  useAddTransactionData,
  useBeneficiersData,
} from '../firebase/FirebaseQuery';
import {useQueryClient} from 'react-query';

const Transfer = ({navigation}) => {
  const isarabic = useSelector(state => state.language.AR);
  const [amount, setamount] = useState('');
  const [reason, setreason] = useState('');
  const useraccountNum = useSelector(state => state.user.accountnum);
  const usermobileNum = useSelector(state => state.user.phone);
  const route = useRoute();
  const benefaccountNum = route.params?.benefAccount;
  const typesoftransfer = [
    {label: 'Between your accounts', value: '1'},
    {label: 'to another account', value: '2'},
  ];
  const transferfrom = [
    /*{label: '056-12489872314587', value: '1'},
    {label: '178-12347856987125', value: '1'},*/
    {label: useraccountNum?.toString(), value: '1'},
  ];
  const transferto = [
    /*{label: '047-1478954126547231', value: '1'}*/
    {label: benefaccountNum, value: '1'},
  ];

  const username = route.params?.name;
  const mobilenum = useSelector(state => state.user.phone);
  const mutation = useAddTransactionData();
  const dispatch = useDispatch();
  const formatdate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
  };
  return (
    <View style={{height: '100%'}}>
      <SignUpHeader navigation={navigation} />
      <MyAppText
        style={{
          fontFamily: 'Roboto-Medium',
          fontSize: 20,
          fontWeight: '700',
          color: 'black',
          margin: 15,
        }}>
        Transfer
      </MyAppText>
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
            onPress={async () => {
              //console.log(username);
              mutation
                .mutateAsync({
                  from: usermobileNum,
                  id: Math.random(),
                  username: username,
                  name: reason,
                  amount: amount,
                  date: formatdate(),
                })
                .then(() => {
                  dispatch(fetchuserdata(mobilenum));
                  //dispatch(fetchusers(mobilenum));
                  //queryclient.invalidateQueries('Beneficiers');
                  navigation.navigate('OTP', {
                    mobilenum: mobilenum,
                    name: username,
                    previousScreen: route.name,
                  });
                });
            }}>
            <MyAppText style={styles.buttontext}>Transfer</MyAppText>
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
