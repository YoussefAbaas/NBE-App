import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState} from 'react';

const SendMoney = () => {
  const [sendmoneyUsers, setsendmoneyUsers] = useState([
    {name: 'Alex', image: require('../assets/images/user1.png')},
    {name: 'youssef', image: require('../assets/images/user2.png')},
    {name: 'yohan', image: require('../assets/images/user3.png')},
    {name: 'soha', image: require('../assets/images/user4.png')},
    {name: 'amir', image: require('../assets/images/user1.png')},
    {name: 'seham', image: require('../assets/images/user2.png')},
    {name: 'soha1', image: require('../assets/images/user4.png')},
    {name: 'amir1', image: require('../assets/images/user1.png')},
    {name: 'seham1', image: require('../assets/images/user2.png')},
  ]);
  return (
    <View>
      <Text
        style={{
          fontFamily: 'Roboto-Medium',
          fontSize: 18,
          fontWeight: '700',
          color: 'black',
          marginHorizontal: 20,
          marginTop: 20,
        }}>
        Send Money
      </Text>
      <FlatList
        data={sendmoneyUsers}
        keyExtractor={item => {
          return item.name;
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
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
                flex: 1,
                marginLeft: index === 0 ? 20 : 10,
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
                  textAlign: 'left',
                  fontFamily: 'Roboto-Medium',
                  fontSize: 14,
                  fontWeight: '700',
                  color: 'black',
                }}>
                {item.name}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default SendMoney;

const styles = StyleSheet.create({});
