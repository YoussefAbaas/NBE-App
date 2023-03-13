import {StyleSheet, Text, View} from 'react-native';
import MyAppText from './MyAppText';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import i18n from '../translation/I18Config';

const MainFooter = () => {
  const isarabic = useSelector(state => state.language.AR);
  i18n.locale = useSelector(state => state.language.locale);
  return (
    <View style={styles.container}>
      <MyAppText style={styles.links}>
        <MyAppText style={styles.link}>{i18n.t('Contactus')}</MyAppText>-
        <MyAppText style={styles.link}>{i18n.t('FAQs')}</MyAppText>-
        <MyAppText style={styles.link}>{i18n.t('Help')}</MyAppText>
      </MyAppText>
      <MyAppText style={styles.Rightstext}>{i18n.t('CopyRights')}</MyAppText>
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
