import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const Cards = () => {
  const [cards, setcards] = useState([
    require('../assets/images/card1.png'),
    require('../assets/images/card2.png'),
    require('../assets/images/card3.png'),
  ]);
  return (
    <View>
      <Text
        style={{
          fontFamily: 'Roboto-Medium',
          fontFamily: 'Roboto-Medium',
          fontSize: 20,
          fontWeight: '700',
          color: 'black',
          marginHorizontal: 18,
          marginVertical: 10,
        }}>
        Cards
      </Text>
      <FlatList
        data={cards}
        keyExtractor={item => {
          return item;
        }}
        renderItem={({item}) => {
          return <Image source={item} style={{marginHorizontal: 10}} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({});
