import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import MyAppText from '../components/MyAppText';

import React, {useState} from 'react';
import SignUpHeader from '../components/SignUpHeader';
import PasswordValidation from '../components/PasswordValidation';
import CustomTextInput from '../components/CustomTextInput';
import {registerPhoneNumber} from '../firebase/Auth';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../redux/userSlice';
import i18n from '../translation/I18Config';

const SetPassword = props => {
  const isarabic = useSelector(state => state.language.AR);
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const mobile = props.route.params.mobilenum;
  const dispatch = useDispatch();
  i18n.locale = useSelector(state => state.language.locale);
  const passwordCheck = {
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    length: password.length >= 8,
    number: /[0-9]/.test(password),
    specialcharacter: /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password),
  };

  return (
    <View style={styles.container}>
      <SignUpHeader navigation={props.navigation} />
      <View style={{paddingHorizontal: 20, paddingTop: 40}}>
        <MyAppText style={styles.headingtext}>
          {i18n.t('SetPassword')}
        </MyAppText>
        <MyAppText style={styles.descriptiontext}>
          {isarabic
            ? 'Enter a strong password for your online banking account'
            : 'يفضل ان كلمة السر تكون قوية ومش مستخدمة فى مكان تاني'}
        </MyAppText>
      </View>
      <CustomTextInput
        text={i18n.t('Password')}
        background="white"
        textcolor="black"
        image={require('../assets/images/password.png')}
        logowidth={18}
        logoheight={20}
        settext={setpassword}
        value={password}
        secureTextEntry
      />
      <CustomTextInput
        text={i18n.t('ConfirmPassword')}
        background="white"
        textcolor="black"
        image={require('../assets/images/password.png')}
        logowidth={18}
        logoheight={20}
        settext={setconfirmpassword}
        value={confirmpassword}
        secureTextEntry
      />

      <PasswordValidation passwordCheck={passwordCheck} />

      <View style={styles.submit}>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={async () => {
              if (
                Object.values(passwordCheck).every(field => field === true) &&
                password == confirmpassword &&
                password != null &&
                confirmpassword != null
              ) {
                const accountnum = await registerPhoneNumber(mobile, password);
                if (accountnum) {
                  dispatch(
                    login({
                      phone: mobile,
                      accountnum: accountnum,
                      balance: 100000,
                    }),
                  );
                  props.navigation.navigate('SignupSuccess');
                }
              } else alert('Error in password');
            }}>
            <MyAppText style={styles.buttontext}>{i18n.t('next')}</MyAppText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SetPassword;

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
});
