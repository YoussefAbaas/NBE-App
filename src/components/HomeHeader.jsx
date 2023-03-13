import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import MyAppText from './MyAppText';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import i18n from '../translation/I18Config';

const HomeHeader = props => {
  const displayname = useSelector(state => state.user.phone);
  const isarabic = useSelector(state => state.language.AR);
  i18n.locale = useSelector(state => state.language.locale);
  return (
    <View style={styles.header}>
      <View style={styles.headerleft}>
        <Pressable
          onPress={() => {
            props.navigation.openDrawer();
          }}>
          <Image
            source={require('../assets/images/sidebaricon.png')}
            style={{width: 20, height: 17}}
          />
        </Pressable>
        <Image
          source={require('../assets/images/user.png')}
          style={{width: 40, height: 40}}
        />
        <MyAppText
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 14,
            fontWeight: '700',
          }}>
          {i18n.t('Morning')} {'\n'}{' '}
          <Text style={{color: 'black'}}>
            {displayname + '@nbe.com' || props.name}
          </Text>
        </MyAppText>
      </View>
      <View style={styles.ring}>
        <Image source={require('../assets/images/ring.png')} />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  ring: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: 40,
    height: 40,
  },
  headerleft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 20,
    backgroundColor: 'transparent',
  },
});
