import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Touchable,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import MyAppText from './MyAppText';

import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CustomTextInput from './CustomTextInput';
import {signIn} from '../firebase/Auth';
import {login} from '../redux/userSlice';
import i18n from '../translation/I18Config';

const LoginForm = props => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const dispatch = useDispatch();
  const isarabic = useSelector(state => state.language.AR);
  const [Remember, setRemember] = useState(false);
  i18n.locale = useSelector(state => state.language.locale);
  return (
    <View style={styles.loginform}>
      <MyAppText style={[styles.formheader, {marginLeft: isarabic ? 0 : 30}]}>
        {i18n.t('MainPageWelcome')}
      </MyAppText>
      <CustomTextInput
        text={i18n.t('Username')}
        image={require('../assets/images/email.png')}
        background="transparent"
        textcolor="white"
        logowidth={20}
        logoheight={20}
        settext={setemail}
        value={email}
      />
      <CustomTextInput
        text={i18n.t('Password')}
        image={require('../assets/images/password.png')}
        background="transparent"
        textcolor="white"
        logowidth={18}
        logoheight={20}
        settext={setpassword}
        value={password}
        secureTextEntry
      />
      <View style={styles.loginprops}>
        <View style={styles.rememberme}>
          <Pressable
            style={[
              styles.check,
              {backgroundColor: Remember ? '#007236' : 'white'},
            ]}
            onPress={() => {
              setRemember(!Remember);
            }}>
            <Image source={require('../assets/images/check.png')} />
          </Pressable>
          <MyAppText style={styles.propstext}>
            {' '}
            {i18n.t('RememberMe')}
          </MyAppText>
        </View>

        <MyAppText style={styles.propstext}>
          {' '}
          {isarabic ? 'Forgot password?' : 'مش عارف كلمة السر؟'}
        </MyAppText>
      </View>

      <View style={styles.loginbuttons}>
        <TouchableWithoutFeedback
          onPress={async () => {
            const [result, data] = await signIn(email, password);
            if (result) {
              dispatch(login(data));
              props.navigation.navigate('Home');
            }
          }}>
          <View style={styles.loginButton}>
            <MyAppText style={styles.loginButtontext}>
              {i18n.t('Login')}
            </MyAppText>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={props.openModal}>
          <View style={styles.fingerprintButton}>
            <Image source={require('../assets/images/FingerPrint.png')} />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <MyAppText style={styles.signuptext}>
        {i18n.t('Noaccount')}
        <TouchableWithoutFeedback
          onPress={() => {
            props.navigation.navigate('Signup');
          }}>
          <MyAppText
            style={{color: '#F6A721', textDecorationLine: 'underline'}}>
            {i18n.t('Signup')}
          </MyAppText>
        </TouchableWithoutFeedback>
      </MyAppText>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  loginform: {
    marginHorizontal: 10,
    paddingTop: 150,
  },
  formheader: {
    fontFamily: 'Roboto-Medium',
    fontSize: 40,
    fontWeight: 'bold',
    lineHeight: 47,
    color: 'white',
  },
  check: {
    width: 25,
    height: 25,
    backgroundColor: 'white',
    padding: 7,
    borderRadius: 6,
  },
  propstext: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: 'white',
  },
  rememberme: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginprops: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  loginButton: {
    width: 275,
    height: 50,
    backgroundColor: '#007236',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  loginButtontext: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: 'white',
  },
  fingerprintButton: {
    borderWidth: 1.5,
    borderColor: '#F6A721',
    borderRadius: 12,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  loginbuttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  signuptext: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
});
