import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TouchableOpacity,
} from 'react-native';
import MyAppText from './MyAppText';

import React, {useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import MainHeader from './MainHeader';
import DrawerIcon from './DrawerIcon';
import SideBarUserCard from './SideBarUserCard';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../redux/userSlice';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useLayoutEffect} from 'react';
import i18n from '../translation/I18Config';

const CustomDrawer = props => {
  const [enabled, setenabled] = useState(false);
  const toggleswitch = () => {
    setenabled(!enabled);
  };
  const dispatch = useDispatch();
  const isarabic = useSelector(state => state.language.AR);
  i18n.locale = useSelector(state => state.language.locale);

  return (
    <View style={{flex: 1, backgroundColor: '#F1F3FB'}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#F1F3FB'}}>
        <MainHeader languageappear={true} day />
        <View style={{marginTop: 20}}>
          <DrawerItemList {...props} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 19,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <DrawerIcon image={require('../assets/images/dark.png')} />
            <MyAppText
              style={{
                marginLeft: 8,
                fontFamily: 'Roboto-Medium',
                fontSize: 16,
                fontWeight: '500',
              }}>
              {i18n.t('DarkMode')}
            </MyAppText>
          </View>
          <Switch
            style={{backgroundColor: '#F1F3FB'}}
            thumbColor={enabled ? '#007236' : '#B3B3B3'}
            value={enabled}
            onValueChange={toggleswitch}
            trackColor={{false: 'white', true: 'white'}}
          />
        </View>
      </DrawerContentScrollView>
      <View style={{paddingHorizontal: 18}}>
        <TouchableOpacity
          onPress={() => {
            dispatch(logout());
            props.navigation.navigate('Login');
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <DrawerIcon image={require('../assets/images/logout.png')} />
            <MyAppText
              style={{
                marginLeft: 7,
                fontFamily: 'Roboto-Medium',
                fontSize: 16,
                fontWeight: '500',
                color: '#FF0000',
              }}>
              {i18n.t('Logout')}
            </MyAppText>
          </View>
        </TouchableOpacity>
        <SideBarUserCard
          name="Youssef"
          number="01018480035"
          image={require('../assets/images/user.png')}
        />
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
