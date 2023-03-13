import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import MyAppText from './MyAppText';

import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const Cards = () => {
  const isarabic = useSelector(state => state.language.AR);
  const [cards, setcards] = useState([
    require('../assets/images/card1.png'),
    require('../assets/images/card2.png'),
    require('../assets/images/card3.png'),
  ]);
  return (
    <View>
      <MyAppText
        style={{
          fontFamily: 'Roboto-Medium',
          fontSize: 20,
          fontWeight: '700',
          color: 'black',
          marginHorizontal: 18,
          marginVertical: 10,
        }}>
        {isarabic ? 'Cards' : 'الكروت'}
      </MyAppText>
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
