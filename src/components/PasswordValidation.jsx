import {StyleSheet, Text, View, Image} from 'react-native';
import MyAppText from './MyAppText';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const PasswordValidation = props => {
  const passwordCheck = props.passwordCheck;
  const isarabic = useSelector(state => state.language.AR);
  if (isarabic)
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
          <MyAppText
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 16,
              fontWeight: '500',
              color: '#1C2437',
              marginLeft: 5,
            }}>
            Lower case letter
          </MyAppText>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={
              passwordCheck.uppercase
                ? require('../assets/images/green-ellipse.png')
                : require('../assets/images/grey-ellipse.png')
            }
          />
          <MyAppText
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 16,
              fontWeight: '500',
              color: '#1C2437',
              marginLeft: 5,
            }}>
            Upper case letter
          </MyAppText>
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
          <MyAppText
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 16,
              fontWeight: '500',
              color: '#1C2437',
              marginLeft: 5,
            }}>
            Minimum 8 characters
          </MyAppText>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={
              passwordCheck.number
                ? require('../assets/images/green-ellipse.png')
                : require('../assets/images/grey-ellipse.png')
            }
          />
          <MyAppText
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 16,
              fontWeight: '500',
              color: '#1C2437',
              marginLeft: 5,
            }}>
            Number
          </MyAppText>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={
              passwordCheck.specialcharacter
                ? require('../assets/images/green-ellipse.png')
                : require('../assets/images/grey-ellipse.png')
            }
          />
          <MyAppText
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 16,
              fontWeight: '500',
              color: '#1C2437',
              marginLeft: 5,
            }}>
            Special Character
          </MyAppText>
        </View>
      </View>
    );
  else
    return (
      <View style={{marginHorizontal: 10}}>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 45,
              flex: 1,
            }}>
            <Image
              source={
                passwordCheck.length
                  ? require('../assets/images/green-ellipse.png')
                  : require('../assets/images/grey-ellipse.png')
              }
            />
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                fontSize: 16,
                fontWeight: '500',
                color: '#1C2437',
                marginLeft: 5,
              }}>
              {'8 حروف علي الاقل'}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 45,
              flex: 1,
            }}>
            <Image
              source={
                passwordCheck.uppercase && passwordCheck.lowercase
                  ? require('../assets/images/green-ellipse.png')
                  : require('../assets/images/grey-ellipse.png')
              }
            />
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                fontSize: 16,
                fontWeight: '500',
                color: '#1C2437',
                marginLeft: 5,
              }}>
              {'حروف'}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 45,
              flex: 1,
            }}>
            <Image
              source={
                passwordCheck.number
                  ? require('../assets/images/green-ellipse.png')
                  : require('../assets/images/grey-ellipse.png')
              }
            />
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                fontSize: 16,
                fontWeight: '500',
                color: '#1C2437',
                marginLeft: 5,
              }}>
              {'ارقام'}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 45,
              flex: 1,
            }}>
            <Image
              source={
                passwordCheck.specialcharacter
                  ? require('../assets/images/green-ellipse.png')
                  : require('../assets/images/grey-ellipse.png')
              }
            />
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                fontSize: 16,
                fontWeight: '500',
                color: '#1C2437',
                marginLeft: 5,
              }}>
              {'رموز'}
            </Text>
          </View>
        </View>
      </View>
    );
};

export default PasswordValidation;

const styles = StyleSheet.create({});
