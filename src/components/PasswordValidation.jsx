import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const PasswordValidation = props => {
  const passwordCheck = props.passwordCheck;
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
        <Image
          source={
            passwordCheck.lowercase
              ? require('../assets/images/green-ellipse.png')
              : require('../assets/images/grey-ellipse.png')
          }
        />
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
        <Image
          source={
            passwordCheck.uppercase
              ? require('../assets/images/green-ellipse.png')
              : require('../assets/images/grey-ellipse.png')
          }
        />
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
        <Image
          source={
            passwordCheck.length
              ? require('../assets/images/green-ellipse.png')
              : require('../assets/images/grey-ellipse.png')
          }
        />
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
        <Image
          source={
            passwordCheck.number
              ? require('../assets/images/green-ellipse.png')
              : require('../assets/images/grey-ellipse.png')
          }
        />
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
        <Image
          source={
            passwordCheck.specialcharacter
              ? require('../assets/images/green-ellipse.png')
              : require('../assets/images/grey-ellipse.png')
          }
        />
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
