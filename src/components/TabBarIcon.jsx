import {StyleSheet, Text, View, Image} from 'react-native';
import MyAppText from './MyAppText';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const TabBarIcon = props => {
  return (
    <View
      style={{
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.focused ? '#007236' : '#F1F3FB',
        borderRadius: 10,
      }}>
      <Image
        source={props.image}
        style={{
          width: 30,
          height: 30,
          tintColor: props.focused ? 'white' : '#B7B7B7',
        }}
        resizeMode="contain"
      />
      <MyAppText
        style={{
          fontFamily: 'Roboto-Medium',
          fontSize: 14,
          fontWeight: '700',
          color: props.focused ? 'white' : '#B7B7B7',
          textAlign: 'center',
        }}>
        {props.name}
      </MyAppText>
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({});
