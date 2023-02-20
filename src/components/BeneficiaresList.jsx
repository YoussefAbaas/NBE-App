import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import React from 'react';
import BeneficiareCard from './BeneficiareCard';

const BeneficiaresList = props => {
  return props.slider == true ? (
    <FlatList
      data={props.users}
      keyExtractor={item => {
        return item.name;
      }}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('BeneficiaresHistory', item)
            }>
            <BeneficiareCard {...item} navigation={props.navigation} />
          </TouchableOpacity>
        );
      }}
    />
  ) : (
    <FlatList
      data={props.users}
      keyExtractor={item => {
        return item.name;
      }}
      horizontal={false}
      numColumns={4}
      key={4}
      columnWrapperStyle={{flexWrap: 'wrap'}}
      renderItem={({item, index}) => {
        return (
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              width: 70,
              height: 85,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 20,
              marginTop: 20,
            }}>
            <Image
              source={item.image}
              style={{
                width: 40,
                height: 40,
                alignSelf: 'center',
                resizeMode: 'cover',
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Roboto-Medium',
                fontSize: 15,
                fontWeight: '500',
                color: 'black',
              }}>
              {item.name}
            </Text>
          </View>
        );
      }}
    />
  );
};

export default BeneficiaresList;

const styles = StyleSheet.create({});
