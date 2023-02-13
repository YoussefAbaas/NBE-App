import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const BeneficiaresEmpty = props => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 60,
        paddingVertical: 100,
      }}>
      <Image source={require('../assets/images/benefitsempty.png')} />
      <Text
        style={{
          fontFamily: 'Roboto-Medium',
          fontSize: 18,
          fontWeight: '500',
          color: 'black',
        }}>
        No Beneficiaries
      </Text>
      <Text
        style={{
          fontFamily: 'Roboto-Medium',
          fontSize: 14,
          fontWeight: '500',
          color: 'black',
          textAlign: 'center',
        }}>
        You don’t have beneficiaries, add some so you can send money
      </Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('AddBeneficier', {
            adduser: props.adduser,
          });
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
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 14,
            fontWeight: '600',
            color: 'white',
          }}>
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BeneficiaresEmpty;

const styles = StyleSheet.create({});
