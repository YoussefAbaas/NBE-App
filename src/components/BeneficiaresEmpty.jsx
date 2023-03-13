import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import MyAppText from './MyAppText';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import i18n from '../translation/I18Config';

const BeneficiaresEmpty = props => {
  const isarabic = useSelector(state => state.language.AR);
  i18n.locale = useSelector(state => state.language.locale);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 60,
        paddingVertical: 100,
      }}>
      <Image source={require('../assets/images/benefitsempty.png')} />
      <MyAppText
        style={{
          fontFamily: 'Roboto-Medium',
          fontSize: 18,
          fontWeight: '500',
          color: 'black',
        }}>
        {i18n.t('NoBeneficiaries')}
      </MyAppText>
      <MyAppText
        style={{
          fontFamily: 'Roboto-Medium',
          fontSize: 14,
          fontWeight: '500',
          color: 'black',
          textAlign: 'center',
        }}>
        {i18n.t('NoBeneficiariesText')}
      </MyAppText>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('AddBeneficier');
        }}
        style={{
          backgroundColor: '#007236',
          width: 63,
          height: 30,
          borderRadius: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Image source={require('../assets/images/addicon.png')} />
        <MyAppText
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 14,
            fontWeight: '600',
            color: 'white',
          }}>
          {i18n.t('Add')}
        </MyAppText>
      </TouchableOpacity>
    </View>
  );
};

export default BeneficiaresEmpty;

const styles = StyleSheet.create({});
