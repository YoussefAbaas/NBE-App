import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const PasswordValidation = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginRight: 45}}>
        <Image source={require('../assets/images/green-ellipse.png')} />
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 16,
            fontWeight: '500',
            color: '#1C2437',
            marginLeft: 5,
          }}>
          Lower case letter
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../assets/images/green-ellipse.png')} />
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 16,
            fontWeight: '500',
            color: '#1C2437',
            marginLeft: 5,
          }}>
          Upper case letter
        </Text>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginRight: 8}}>
        <Image source={require('../assets/images/green-ellipse.png')} />
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 16,
            fontWeight: '500',
            color: '#1C2437',
            marginLeft: 5,
          }}>
          Minimum 8 characters
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../assets/images/grey-ellipse.png')} />
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 16,
            fontWeight: '500',
            color: '#1C2437',
            marginLeft: 5,
          }}>
          Number
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../assets/images/grey-ellipse.png')} />
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 16,
            fontWeight: '500',
            color: '#1C2437',
            marginLeft: 5,
          }}>
          Special Character
        </Text>
      </View>
    </View>
  );
};

export default PasswordValidation;

const styles = StyleSheet.create({});
