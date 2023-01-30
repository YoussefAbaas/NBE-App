import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SignUpHeader from '../components/SignUpHeader';
import PasswordValidation from '../components/PasswordValidation';
import CustomTextInput from '../components/CustomTextInput';
import {registerPhoneNumber} from '../firebase/Auth';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../redux/userSlice';

const SetPassword = props => {
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const mobile = props.route.params.mobilenum;
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <SignUpHeader navigation={props.navigation} />
      <View style={{paddingHorizontal: 20, paddingTop: 40}}>
        <Text style={styles.headingtext}>Set your password</Text>
        <Text style={styles.descriptiontext}>
          Enter a strong password for your online banking account
        </Text>
      </View>
      <CustomTextInput
        text="Password"
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
        text="Confirm Password"
        background="white"
        textcolor="black"
        image={require('../assets/images/password.png')}
        logowidth={18}
        logoheight={20}
        settext={setconfirmpassword}
        value={confirmpassword}
        secureTextEntry
      />

      <PasswordValidation />

      <View style={styles.submit}>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              const result = registerPhoneNumber(mobile, password);
              if (result) {
                dispatch(login(mobile));
                props.navigation.navigate('SignupSuccess');
              }
            }}>
            <Text style={styles.buttontext}>Submit</Text>
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
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  descriptiontext: {
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
    fontSize: 16,
    fontWeight: '600',
  },
  submittext: {
    textAlign: 'center',
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
