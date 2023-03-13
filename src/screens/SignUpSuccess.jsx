import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import MyAppText from '../components/MyAppText';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MainHeader from '../components/MainHeader';
import SignUpHeader from '../components/SignUpHeader';
import i18n from '../translation/I18Config';

const SignUpSuccess = ({navigation}) => {
  const isarabic = useSelector(state => state.language.AR);
  i18n.locale = useSelector(state => state.language.locale);
  return (
    <View style={styles.container}>
      <MainHeader languageappear={false} />
      <ImageBackground
        resizeMode="cover"
        style={styles.background}
        source={require('../assets/images/signupsuccessbg.png')}>
        <View style={styles.finishtext}>
          <MyAppText
            style={{
              color: 'white',
              fontFamily: 'Roboto-Medium',
              fontSize: 30,
              fontWeight: '700',
            }}>
            {i18n.t('Congratulations')}
          </MyAppText>
          <MyAppText style={{color: 'white', fontWeight: '700', fontSize: 18}}>
            {i18n.t('RegeisterSuccsess')}
          </MyAppText>
        </View>
        <View style={styles.submit}>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <MyAppText style={styles.buttontext}>
                {i18n.t('Finish')}
              </MyAppText>
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
    fontFamily: 'Roboto-Medium',
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
