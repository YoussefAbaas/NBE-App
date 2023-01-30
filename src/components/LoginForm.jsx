import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Touchable,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from './CustomTextInput';
import {signIn} from '../firebase/Auth';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../redux/userSlice';

const LoginForm = props => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const dispatch = useDispatch();
  return (
    <View style={styles.loginform}>
      <Text style={styles.formheader}>
        Welcome to {'\n'}The National Bank of Egypt
      </Text>
      <CustomTextInput
        text="Username"
        image={require('../assets/images/email.png')}
        background="transparent"
        textcolor="white"
        logowidth={20}
        logoheight={20}
        settext={setemail}
        value={email}
      />
      <CustomTextInput
        text="Password"
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
          <View style={styles.check}>
            <Image source={require('../assets/images/check.png')} />
          </View>
          <Text style={styles.propstext}>Remember me</Text>
        </View>

        <Text style={styles.propstext}>Forgot password?</Text>
      </View>

      <View style={styles.loginbuttons}>
        <TouchableWithoutFeedback
          onPress={async () => {
            const result = await signIn(email, password);
            if (result) {
              dispatch(login(email));
              props.navigation.navigate('Home');
            }
          }}>
          <View style={styles.loginButton}>
            <Text style={styles.loginButtontext}>Log in</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={props.openModal}>
          <View style={styles.fingerprintButton}>
            <Image source={require('../assets/images/FingerPrint.png')} />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <Text style={styles.signuptext}>
        Don’t have an account?{' '}
        <TouchableWithoutFeedback
          onPress={() => {
            props.navigation.navigate('Signup');
          }}>
          <Text style={{color: '#F6A721', textDecorationLine: 'underline'}}>
            Sign up
          </Text>
        </TouchableWithoutFeedback>
      </Text>
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
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
});
