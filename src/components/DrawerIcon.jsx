import {Image, StyleSheet, Text, View} from 'react-native';
import MyAppText from './MyAppText';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const DrawerIcon = ({image, focused}) => {
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
      <Image
        source={image}
        style={{tintColor: focused ? 'white' : '#1B1B1B'}}
      />
    </View>
  );
};

export default DrawerIcon;

const styles = StyleSheet.create({});
