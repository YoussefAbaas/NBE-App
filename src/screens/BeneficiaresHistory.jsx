import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import BeneficiareCard from '../components/BeneficiareCard';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BeneficiaresHistory = props => {
  const user = props.route.params;
  const navigation = useNavigation();
  return (
    <View>
      <HomeHeader name={'youssef'} navigation={navigation} />
      <View style={{marginVertical: 15}}>
        <BeneficiareCard {...user} navigation={props.navigation} />
      </View>
      {user.transactions.length > 0 ? (
        <View style={{marginTop: 10}}>
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 20,
              fontWeight: '700',
              color: 'black',
              marginLeft: 12,
            }}>
            Transactions History
          </Text>
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
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'transparent',
                      borderRadius: 12,
                      marginLeft: -10,
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
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 18,
              fontWeight: '500',
              color: 'black',
              textAlign: 'center',
            }}>
            No History
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
              fontWeight: '500',
              color: 'black',
              textAlign: 'center',
            }}>
            Not a single transaction was made to this account
          </Text>
        </View>
      )}
    </View>
  );
};

export default BeneficiaresHistory;

const styles = StyleSheet.create({});
