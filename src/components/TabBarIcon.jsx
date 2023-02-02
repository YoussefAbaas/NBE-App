import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

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
        style={{width: 30, height: 30}}
        resizeMode="contain"
      />
      <Text
        style={{
          fontFamily: 'Roboto-Medium',
          fontSize: 14,
          fontWeight: '700',
          color: props.focused ? 'white' : '#B7B7B7',
          textAlign: 'center',
        }}>
        {props.name}
      </Text>
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({});
