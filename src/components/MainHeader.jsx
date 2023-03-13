import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import MyAppText from './MyAppText';

import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {change, setLanguage} from '../redux/languageSlice';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {I18nManager} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

import RNRestart from 'react-native-restart';
import {save} from '../redux/navigationSlice';

const MainHeader = props => {
  const dispatch = useDispatch();
  const language = useSelector(state => state.language.AR);
  const locale = useSelector(state => state.language.locale);
  const navigationState = useNavigationState(state => state);
  const navigation = useNavigation();

  const languageChange = () => {
    const saveNavigationState = () => {
      return new Promise((resolve, reject) => {
        dispatch(save(navigationState));
        resolve();
      });
    };

    const updatelanguage = () => {
      return new Promise((resolve, reject) => {
        dispatch(change());
        if (locale == 'ar') dispatch(setLanguage('en'));
        else dispatch(setLanguage('ar'));
        navigation.dispatch(DrawerActions?.closeDrawer());
        resolve();
      });
    };
    saveNavigationState()
      .then(updatelanguage)
      .then(() => {
        I18nManager.forceRTL(language);
        RNRestart.Restart();
      });
  };
  return (
    <View style={styles.header}>
      {props.languageappear ? (
        <TouchableOpacity onPress={languageChange}>
          <View style={styles.language}>
            <MyAppText style={styles.languagetext}>
              {language ? 'AR' : 'EN'}
            </MyAppText>
          </View>
        </TouchableOpacity>
      ) : null}
      <Image
        source={
          props.day
            ? require('../assets/images/signupheaderlogo.png')
            : require('../assets/images/logo.png')
        }
        style={styles.logo}
      />
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  logo: {
    width: 160,
    height: 39,
    position: 'absolute',
    top: 20,
    right: 14,
  },
  language: {
    backgroundColor: 'white',
    padding: 20,
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  languagetext: {
    color: '#007236',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    width: 19,
    height: 21,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingTop: 20,
  },
});
