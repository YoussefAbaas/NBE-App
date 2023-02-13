import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import SignUpHeader from '../components/SignUpHeader';
import DropDownComponent from '../components/DropDownComponent';
import CustomTextInput from '../components/CustomTextInput';
import * as ImagePicker from 'react-native-image-picker';

const AddBeneficiare = ({navigation, route}) => {
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
  const addbenef = () => {
    route.params.adduser({
      name: firstname + ' ' + lastname,
      image: imagePath,
      phone: mobilenum,
      amount: '10000',
      accountnum: accountnum,
      transactions: [],
    });
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
            text="First name"
            background="white"
            textcolor="black"
            settext={setfirstname}
            value={firstname}
          />
        </View>
        <View style={{width: 175}}>
          <CustomTextInput
            text="Last name"
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
        <DropDownComponent data={bankbranches} label="Bank Branch" />
        <View style={{width: 370}}>
          <CustomTextInput
            text="Account Number"
            background="white"
            textcolor="black"
            settext={setaccountnum}
            value={accountnum}
          />
        </View>
        <View style={{width: 370}}>
          <CustomTextInput
            text="Phone Number"
            background="white"
            textcolor="black"
            settext={setmobilenum}
            value={mobilenum}
          />
        </View>
        <View style={{width: 370}}>
          <CustomTextInput
            text="Email"
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
              addbenef();
              navigation.navigate('OTP', {
                mobilenum: mobilenum,
                name: firstname + ' ' + lastname,
                previousScreen: route.name,
              });
            }}>
            <Text style={styles.buttontext}>Add Beneficier</Text>
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
