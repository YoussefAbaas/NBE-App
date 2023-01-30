import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const SideBarUserCard = props => {
  const displayname = useSelector(state => state.user.phone);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 12,
        shadowColor: 'white',
        shadowOpacity: 0.7,
        shadowRadius: 90,
        shadowOffset: {
          height: 1,
          width: 1,
        },
        marginLeft: -10,
        borderWidth: 1.5,
        borderColor: 'white',
        paddingRight: 10,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={props.image}
          style={{width: 50, height: 50, borderRadius: 12}}
        />
        <View>
          <Text style={{fontSize: 18, fontWeight: '500', color: 'black'}}>
            {displayname + '@nbe.com' || props.name}
          </Text>
          <Text style={{fontSize: 14, fontWeight: '400', color: 'grey'}}>
            {displayname || props.number}
          </Text>
        </View>
      </View>
      <Image source={require('../assets/images/edithorizontal.png')} />
    </View>
  );
};

export default SideBarUserCard;

const styles = StyleSheet.create({});
