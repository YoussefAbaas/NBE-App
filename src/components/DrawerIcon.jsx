import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DrawerIcon = ({image}) => {
  return (
    <View
      style={{
        width: 30,
        height: 30,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}>
      <Image source={image} />
    </View>
  );
};

export default DrawerIcon;

const styles = StyleSheet.create({});
