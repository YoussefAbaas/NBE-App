import {StyleSheet, Text, View, Image, Modal, Pressable} from 'react-native';
import MyAppText from './MyAppText';

import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import EditBeneficierModal from './EditBeneficierModal';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';

const BeneficiareCard = props => {
  const [modalisopen, setmodalisopen] = useState(false);
  const togglemodal = () => {
    setmodalisopen(!modalisopen);
  };
  const route = useRoute();
  const isarabic = useSelector(state => state.language.AR);
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
        borderWidth: 1.5,
        borderColor: 'white',
        paddingRight: 10,
        width: '90%',
        marginLeft: 20,
        marginTop: 10,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={props.image}
          style={{
            width: 55,
            height: 55,
            borderRadius: 12,
            marginLeft: 10,
          }}
        />
        <View style={{marginLeft: 10}}>
          <MyAppText
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 18,
              fontWeight: '700',
              color: 'black',
            }}>
            {props.name}
          </MyAppText>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../assets/images/phone.png')} />
            <Text
              style={{
                fontFamily: 'Roboto-Medium',
                fontSize: 14,
                fontWeight: '600',
                color: 'grey',
              }}>
              {props.phone}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../assets/images/amount.png')} />
            <Text
              style={{
                fontFamily: 'Roboto-Medium',
                fontSize: 14,
                fontWeight: '600',
                color: 'grey',
              }}>
              ${props.amount}
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={{position: 'absolute', right: 10, top: 10}}
        onPress={togglemodal}>
        <Image source={require('../assets/images/edithorizontal.png')} />
      </Pressable>
      <EditBeneficierModal
        toggleModal={togglemodal}
        openModal={modalisopen}
        navigation={props.navigation}
        route={route}
        {...props}
      />
    </View>
  );
};

export default BeneficiareCard;

const styles = StyleSheet.create({});
