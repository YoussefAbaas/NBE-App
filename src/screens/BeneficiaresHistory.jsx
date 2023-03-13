import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import MyAppText from '../components/MyAppText';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import HomeHeader from '../components/HomeHeader';
import BeneficiareCard from '../components/BeneficiareCard';
import {FlatList} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import i18n from '../translation/I18Config';

const BeneficiaresHistory = props => {
  const isarabic = useSelector(state => state.language.AR);
  const user = props.route.params;
  const navigation = useNavigation();
  i18n.locale = useSelector(state => state.language.locale);
  return (
    <View>
      <HomeHeader name={'youssef'} navigation={navigation} />
      <View style={{marginVertical: 15}}>
        <BeneficiareCard {...user} navigation={props.navigation} />
      </View>
      {user.transactions.length > 0 ? (
        <View style={{marginTop: 10}}>
          <MyAppText
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 20,
              fontWeight: '700',
              color: 'black',
              marginLeft: 12,
            }}>
            {i18n.t('TransactionsHistory')}
          </MyAppText>
          <FlatList
            data={user.transactions}
            keyExtractor={item => {
              return item.id;
            }}
            scrollEnabled={true}
            renderItem={({item}) => {
              return (
                <TouchableWithoutFeedback>
                  <View
                    style={{
                      flexDirection: isarabic ? 'row' : 'row-reverse',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'transparent',
                      borderRadius: 12,
                      borderBottomColor: 'black',
                      borderBottomWidth: 1,
                      paddingRight: 10,
                      height: 70,
                      marginBottom: 2,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View style={{marginLeft: 25}}>
                        <Text
                          style={{
                            fontFamily: 'Roboto-Medium',
                            fontSize: 18,
                            fontWeight: '500',
                            color: 'black',
                          }}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'Roboto-Medium',
                            fontSize: 16,
                            fontWeight: '400',
                            color: 'grey',
                          }}>
                          {item.date}
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{
                        fontFamily: 'Roboto-Medium',
                        fontSize: 18,
                        fontWeight: '500',
                        color: 'black',
                      }}>
                      ${item.amount}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
          />
        </View>
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 60,
          }}>
          <Image source={require('../assets/images/emptyhistory.png')} />
          <MyAppText
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 18,
              fontWeight: '500',
              color: 'black',
              textAlign: 'center',
            }}>
            {i18n.t('NoHistory')}
          </MyAppText>
          <MyAppText
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
              fontWeight: '500',
              color: 'black',
              textAlign: 'center',
            }}>
            {i18n.t('NoHistoryText')}
          </MyAppText>
        </View>
      )}
    </View>
  );
};

export default BeneficiaresHistory;

const styles = StyleSheet.create({});
