import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MainHeader from '../components/MainHeader';
import SignUpHeader from '../components/SignUpHeader';

const SignUpSuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MainHeader languageappear={false} />
      <ImageBackground
        resizeMode="cover"
        style={styles.background}
        source={require('../assets/images/signupsuccessbg.png')}>
        <View style={styles.finishtext}>
          <Text style={{color: 'white', fontSize: 30, fontWeight: '700'}}>
            Congratulations
          </Text>
          <Text style={{color: 'white', fontWeight: '700'}}>
            You have successfully registered in NBE online banking service
          </Text>
        </View>
        <View style={styles.submit}>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text style={styles.buttontext}>Finish</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUpSuccess;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: -80,
    left: 0,
  },
  container: {
    backgroundColor: '#007236',
    flex: 1,
  },
  finishtext: {
    paddingHorizontal: 15,
  },
  button: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 15,
  },
  buttontext: {
    color: '#007236',
    fontSize: 16,
    fontWeight: '600',
  },
  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 550,
  },
});
