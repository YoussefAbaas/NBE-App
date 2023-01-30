import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const HomeServiceIcon = props => {
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
      <Text
        style={{
          fontWeight: '700',
          fontSize: 14,
          color: 'black',
          textAlign: 'center',
        }}>
        {props.text}
      </Text>
    </View>
  );
};

export default HomeServiceIcon;

const styles = StyleSheet.create({});
