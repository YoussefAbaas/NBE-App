import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import SignUpHeader from '../components/SignUpHeader';
import {useState} from 'react';
import CustomTextInput from '../components/CustomTextInput';
import {set} from 'react-native-reanimated';

const MobileEntry = props => {
  const [mobile, setmobile] = useState('');
  return (
    <View style={styles.container}>
      <SignUpHeader navigation={props.navigation} />
      <View style={{paddingHorizontal: 20, paddingTop: 40}}>
        <Text style={styles.headingtext}>Mobile Number</Text>
        <Text style={styles.descriptiontext}>
          Enter the mobile number registered in the bank
        </Text>
      </View>
      <CustomTextInput
        text="Mobile Number"
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
            onPress={() => {
              props.navigation.navigate('Verification', {
                mobilenum: mobile,
                previousScreen: props.route.name,
              });
            }}>
            <Text style={styles.buttontext}>Submit</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.submittext}>
          By signing up, you agree to our{' '}
          <Text style={{fontWeight: '700', color: 'black'}}>
            Terms of Service
          </Text>{' '}
          and acknowledge that you have read our{' '}
          <Text style={{fontWeight: '700', color: 'black'}}>
            Privacy Policy.
          </Text>
        </Text>
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
