import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MyAppText from '../components/MyAppText';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import SignUpHeader from '../components/SignUpHeader';
import {useState} from 'react';
import CustomTextInput from '../components/CustomTextInput';
import {handleSendCode} from '../firebase/Auth';
import i18n from '../translation/I18Config';

const MobileEntry = props => {
  const isarabic = useSelector(state => state.language.AR);
  i18n.locale = useSelector(state => state.language.locale);
  const [mobile, setmobile] = useState('');
  return (
    <View style={styles.container}>
      <SignUpHeader navigation={props.navigation} />
      <View style={{paddingHorizontal: 20, paddingTop: 40}}>
        <MyAppText style={styles.headingtext}>
          {i18n.t('Mobilenumber')}
        </MyAppText>
        <MyAppText style={styles.descriptiontext}>
          {i18n.t('Enternumber')}
        </MyAppText>
      </View>
      <CustomTextInput
        text={i18n.t('Mobilenumber')}
        background="white"
        textcolor="black"
        image={require('../assets/images/Mobile.png')}
        settext={setmobile}
        logowidth={15}
        logoheight={23}
        value={mobile}
      />
      <View style={styles.submit}>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={async () => {
              //const verificationId = await handleSendCode(mobile);
              //console.log(verificationId);
              // if (verificationId != null) {
              const mobileIsValid = mobile && mobile.length == 11;
              if (mobileIsValid) {
                props.navigation.navigate('Verification', {
                  mobilenum: mobile,
                  previousScreen: props.route.name,
                  //verificationId: verificationId,
                });
              } else {
                alert('Not valid Number');
              }
            }}>
            <MyAppText style={styles.buttontext}>{i18n.t('next')}</MyAppText>
          </TouchableOpacity>
        </View>
        <MyAppText style={styles.submittext}>
          {i18n.t('Approve1')}
          <MyAppText style={{fontWeight: '700', color: 'black'}}>
            {isarabic ? 'Terms of Service' : 'شروط الاستخدام'}
          </MyAppText>{' '}
          {i18n.t('Approve2')}
          <MyAppText style={{fontWeight: '700', color: 'black'}}>
            {i18n.t('Approve3')}
          </MyAppText>
        </MyAppText>
      </View>
    </View>
  );
};

export default MobileEntry;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  headingtext: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  descriptiontext: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    fontWeight: '400',
    color: '#B7B7B7',
  },

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
    fontSize: 15,
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
