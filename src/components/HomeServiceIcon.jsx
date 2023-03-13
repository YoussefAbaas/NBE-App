import {StyleSheet, Text, View, Image} from 'react-native';
import MyAppText from './MyAppText';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const HomeServiceIcon = props => {
  const isarabic = useSelector(state => state.language.AR);
  return (
    <View style={{justifyContent: 'center', width: 60}}>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 10,
          backgroundColor: props.background,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={props.image} />
      </View>
      <MyAppText
        style={{
          fontWeight: '700',
          fontFamily: 'Roboto-Medium',
          fontSize: 14,
          color: 'black',
          textAlign: 'center',
        }}>
        {props.text}
      </MyAppText>
    </View>
  );
};

export default HomeServiceIcon;

const styles = StyleSheet.create({});
