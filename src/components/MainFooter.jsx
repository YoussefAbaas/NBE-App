import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MainFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.links}>
        <Text style={styles.link}>Contact Us</Text>-
        <Text style={styles.link}>FAQs</Text>-
        <Text style={styles.link}>Help</Text>
      </Text>
      <Text style={styles.Rightstext}>
        Copyright © NBE 2021 All Rights Reserved - National Bank of Egypt
      </Text>
    </View>
  );
};

export default MainFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 20,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  link: {
    color: '#F49322',
  },
  links: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  Rightstext: {
    fontFamily: 'Roboto-Medium',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
});
