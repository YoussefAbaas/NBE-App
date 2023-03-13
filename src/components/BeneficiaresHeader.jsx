import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import MyAppText from './MyAppText';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import i18n from '../translation/I18Config';

const BeneficiaresHeader = props => {
  const isarabic = useSelector(state => state.language.AR);
  i18n.locale = useSelector(state => state.language.locale);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <MyAppText
        style={{
          fontFamily: 'Roboto-Medium',
          fontSize: 20,
          fontWeight: '700',
          color: 'black',
          marginHorizontal: -40,
          marginVertical: 20,
        }}>
        {i18n.t('Beneficiaries')}
      </MyAppText>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: -20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 61,
            height: 30,
            backgroundColor: 'white',
            borderRadius: 12,
            alignItems: 'center',
            marginRight: 30,
          }}>
          <TouchableOpacity
            onPress={props.toggleslider}
            style={{
              padding: 8,
              backgroundColor: props.slider ? 'white' : 'green',
              width: 24,
              height: 24,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../assets/images/slider1.png')}
              style={{
                width: 14,
                height: 14,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={props.toggleslider}
            style={{
              padding: 8,
              backgroundColor: props.slider ? 'green' : 'white',
              width: 24,
              height: 24,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../assets/images/slider2.png')}
              style={{
                width: 14,
                height: 14,
              }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('AddBeneficier');
          }}
          style={{
            backgroundColor: 'white',
            width: 63,
            height: 30,
            borderRadius: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <Image
            source={require('../assets/images/addicon.png')}
            style={{tintColor: '#007236'}}
          />
          <MyAppText
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
              fontWeight: '600',
              color: '#007236',
            }}>
            {i18n.t('Add')}
          </MyAppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BeneficiaresHeader;

const styles = StyleSheet.create({});
