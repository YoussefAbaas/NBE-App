import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const BeneficiaresHeader = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text
        style={{
          fontFamily: 'Roboto-Medium',
          fontSize: 20,
          fontWeight: '700',
          color: 'black',
          marginHorizontal: -40,
          marginVertical: 20,
        }}>
        Beneficiaries
      </Text>
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
    </View>
  );
};

export default BeneficiaresHeader;

const styles = StyleSheet.create({});
