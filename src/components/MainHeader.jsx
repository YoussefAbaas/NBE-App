import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {change} from '../redux/languageSlice';

const MainHeader = props => {
  const dispatch = useDispatch();
  const language = useSelector(state => state.language.AR);
  const languageRestart = () => {
    dispatch(change());
  };
  return (
    <View style={styles.header}>
      {props.languageappear ? (
        <TouchableOpacity onPress={languageRestart}>
          <View style={styles.language}>
            <Text style={styles.languagetext}>{language ? 'AR' : 'EN'}</Text>
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
