import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MyAppText from '../components/MyAppText';

import React, {useEffect, useRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import SignUpHeader from '../components/SignUpHeader';
import DigitInput from '../components/DigitInput';
import MissionCompletedModal from '../components/MissionCompletedModal';
import {handleVerifyCode} from '../firebase/Auth';
import i18n from '../translation/I18Config';

const Verification = props => {
  const isarabic = useSelector(state => state.language.AR);
  const prevscreen = props.route.params.previousScreen;
  const [ismodalopen, setismodalopen] = useState(false);
  const mobilenum = props.route.params.mobilenum;
  const toggleModal = () => {
    setismodalopen(!ismodalopen);
  };
  const displayname = useSelector(state => state.user.phone);
  const [timer, settimer] = useState(30);
  const verificationId = props.route.params.verificationId;
  i18n.locale = useSelector(state => state.language.locale);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) settimer(timer => timer - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);
  const [OTP, setOTP] = useState('');
  const refs = Array(6)
    .fill()
    .map(() => useRef(null));
  const handlechangeotp = (text, i) => {
    const newvalue = [...OTP];
    newvalue[i] = text;
    setOTP(newvalue.join(''));
    if (text && i < 5) {
      refs[i + 1].current.focus();
    }
  };
  return (
    <View style={styles.container}>
      <SignUpHeader navigation={props.navigation} />
      <View style={{paddingHorizontal: 20, paddingTop: 40}}>
        <MyAppText style={styles.headingtext}>
          {
            /*isarabic
            ? prevscreen == 'Transfer'
              ? 'OTP'
              : 'Verification'
  : 'رمز التاكيد'*/
            i18n.t('Verification')
          }
        </MyAppText>
        <MyAppText style={styles.descriptiontext}>
          {`${i18n.t('WriteDigits')} ${displayname || mobilenum}`}
        </MyAppText>
        <View style={styles.digits}>
          {Array.from({length: 6}, (_, i) => {
            return (
              <DigitInput
                innerref={refs[i]}
                key={i}
                onChangeText={text => {
                  handlechangeotp(text, i);
                }}
              />
            );
          })}
        </View>
        <MyAppText
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 16,
            fontWeight: '400',
          }}>
          {i18n.t('NotReceiveCode')}
        </MyAppText>
        <MyAppText
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 16,
            fontWeight: '700',
            color: 'black',
          }}>
          {`${i18n.t('RequestNewCode')}${timer >= 10 ? timer : '0' + timer}`}
        </MyAppText>
        <MyAppText></MyAppText>
      </View>

      <View style={styles.submit}>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={async () => {
              //const isverified = await handleVerifyCode(verificationId, OTP);
              //console.log(isverified);
              const otpIsValid = OTP && OTP.length == 6;
              if (otpIsValid) {
                if (prevscreen == 'Signup')
                  props.navigation.navigate('SetPassword', {
                    mobilenum: mobilenum,
                  });
                else toggleModal();
              } else alert('Wrong OTP code');
            }}>
            <MyAppText style={styles.buttontext}>{i18n.t('next')}</MyAppText>
          </TouchableOpacity>
        </View>
      </View>
      <MissionCompletedModal
        openModal={ismodalopen}
        toggleModal={toggleModal}
        username={props.route.params.name}
        text={
          prevscreen == 'Transfer'
            ? i18n.t('TransferSuccesful', {name: props.route.params.name})
            : i18n.t('AddedSuccessful', {name: props.route.params.name})
        }
      />
    </View>
  );
};

export default Verification;

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
  digits: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
  },
});
