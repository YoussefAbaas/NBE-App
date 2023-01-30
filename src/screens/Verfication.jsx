import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import SignUpHeader from '../components/SignUpHeader';
import DigitInput from '../components/DigitInput';
import MissionCompletedModal from '../components/MissionCompletedModal';
import {useSelector, useDispatch} from 'react-redux';

const Verification = props => {
  const prevscreen = props.route.params.previousScreen;
  const [ismodalopen, setismodalopen] = useState(false);
  const mobilenum = props.route.params.mobilenum;
  const toggleModal = () => {
    setismodalopen(!ismodalopen);
  };
  const displayname = useSelector(state => state.user.phone);
  return (
    <View style={styles.container}>
      <SignUpHeader navigation={props.navigation} />
      <View style={{paddingHorizontal: 20, paddingTop: 40}}>
        <Text style={styles.headingtext}>
          {prevscreen == 'Transfer' ? 'OTP' : 'Verification'}
        </Text>
        <Text style={styles.descriptiontext}>
          Enter 5 digit code we sent to {displayname || mobilenum}
        </Text>
        <View style={styles.digits}>
          {Array.from({length: 5}, (_, i) => {
            return <DigitInput key={i} />;
          })}
        </View>
        <Text style={{fontSize: 16, fontWeight: '400'}}>
          Didn't receive the code?
        </Text>
        <Text style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
          Request new one in 00:30
        </Text>
        <Text></Text>
      </View>

      <View style={styles.submit}>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              if (prevscreen == 'Signup')
                props.navigation.navigate('SetPassword', {
                  mobilenum: mobilenum,
                });
              else toggleModal();
            }}>
            <Text style={styles.buttontext}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <MissionCompletedModal
        openModal={ismodalopen}
        toggleModal={toggleModal}
        username={props.route.params.name}
        text={
          prevscreen == 'TransferPage'
            ? `Transfer to ${props.route.params.name} was successful`
            : `${props.route.params.name} was successfully added to your beneficiares list`
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
  digits: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
  },
});
