import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import MyAppText from '../components/MyAppText';

import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import SignUpHeader from '../components/SignUpHeader';
import DropDownComponent from '../components/DropDownComponent';
import CustomTextInput from '../components/CustomTextInput';
import * as ImagePicker from 'react-native-image-picker';
import {addbeneficier} from '../firebase/FirestoreDB';
import {fetchusers} from '../redux/beneficiersSlice';
import i18n from '../translation/I18Config';
import {useQueryClient} from 'react-query';
import {useAddBeneficierData} from '../firebase/FirebaseQuery';

const AddBeneficiare = ({navigation, route}) => {
  const isarabic = useSelector(state => state.language.AR);
  i18n.locale = useSelector(state => state.language.locale);
  const phonenumber = useSelector(state => state.user.phone);
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [mobilenum, setmobilenum] = useState('');
  const [accountnum, setaccountnum] = useState('');
  const [email, setemail] = useState('');
  const [imagePath, setimagePath] = useState(null);
  const chooseImage = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = {
          uri: response.assets[0].uri,
        };
        console.log(source);
        setimagePath(source);
      }
    });
  };
  const mutation = useAddBeneficierData();
  const addbenef = () => {
    const benficierData = {
      name: firstname + ' ' + lastname,
      image: imagePath,
      phone: mobilenum,
      amount: 0,
      accountnum: accountnum,
      transactions: [],
    };
    const mobileIsValid = mobilenum && mobilenum.length == 11;
    const emailIsValid = email && email.includes('@');
    const accountnumberIsvalid = accountnum && accountnum.length == 16;
    if (
      firstname &&
      lastname &&
      accountnumberIsvalid &&
      mobileIsValid &&
      emailIsValid &&
      imagePath
    ) {
      mutation.mutateAsync({relateduserphone: phonenumber, ...benficierData});
      return true;
    } else {
      return false;
    }
  };
  const bankbranches = [{label: '043 - Water Way Mall', value: '1'}];
  return (
    <View style={{height: '100%'}}>
      <SignUpHeader navigation={navigation} />
      <TouchableOpacity onPress={chooseImage}>
        <View
          style={{
            padding: 49,
            backgroundColor: 'white',
            width: 138,
            height: 138,
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 46, height: 40}}
            source={
              imagePath
                ? imagePath
                : require('../assets/images/imageupload.png')
            }
          />
        </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginHorizontal: 20,
        }}>
        <View style={{width: 175}}>
          <CustomTextInput
            text={i18n.t('FirstName')}
            background="white"
            textcolor="black"
            settext={setfirstname}
            value={firstname}
          />
        </View>
        <View style={{width: 175}}>
          <CustomTextInput
            text={i18n.t('LastName')}
            background="white"
            textcolor="black"
            settext={setlastname}
            value={lastname}
          />
        </View>
      </View>
      <View
        style={{
          width: 400,
          alignItems: 'center',
          paddingHorizontal: 15,
          marginTop: 15,
        }}>
        <DropDownComponent data={bankbranches} label={i18n.t('BankBranch')} />
        <View style={{width: 370}}>
          <CustomTextInput
            text={i18n.t('AccountNum')}
            background="white"
            textcolor="black"
            settext={setaccountnum}
            value={accountnum}
          />
        </View>
        <View style={{width: 370}}>
          <CustomTextInput
            text={i18n.t('TelephoneNum')}
            background="white"
            textcolor="black"
            settext={setmobilenum}
            value={mobilenum}
          />
        </View>
        <View style={{width: 370}}>
          <CustomTextInput
            text={i18n.t('Email')}
            background="white"
            textcolor="black"
            settext={setemail}
            value={email}
          />
        </View>
      </View>
      <View style={styles.submit}>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              const result = addbenef();
              result
                ? navigation.navigate('OTP', {
                    mobilenum: mobilenum,
                    name: firstname + ' ' + lastname,
                    previousScreen: route.name,
                  })
                : alert('Not valid data');
            }}>
            <MyAppText style={styles.buttontext}>
              {i18n.t('AddBeneficier')}
            </MyAppText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddBeneficiare;

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
