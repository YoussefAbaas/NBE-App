import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import MyAppText from './MyAppText';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import i18n from '../translation/I18Config';

const EditBeneficierModal = props => {
  const isarabic = useSelector(state => state.language.AR);
  i18n.locale = useSelector(state => state.language.locale);
  return (
    <View>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={props.openModal}>
        <View style={styles.modalPage}>
          <View style={styles.modalContent}>
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
                marginLeft: 0,
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
                  <Text
                    style={{
                      fontFamily: 'Roboto-Medium',
                      fontSize: 18,
                      fontWeight: '700',
                      color: 'black',
                    }}>
                    {props.name}
                  </Text>
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
            </View>
            <TouchableOpacity
              onPress={() => {
                console.log(props.name);
                props.navigation.navigate('Transfer', {
                  name: props.name,
                  mobile: props.phone,
                  benefAccount: props.accountnum,
                });
                props.toggleModal();
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
                marginTop: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#00000017',
                  width: 40,
                  height: 40,
                  padding: 12,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <Image source={require('../assets/images/transferbenf.png')} />
              </View>
              <View>
                <MyAppText
                  style={{
                    color: 'black',
                    fontFamily: 'Roboto-Medium',
                    fontSize: 16,
                    fontWeight: '500',
                  }}>
                  {i18n.t('Transfer')}
                </MyAppText>
                <MyAppText
                  style={{
                    fontFamily: 'Roboto-Medium',
                    fontSize: 14,
                    fontWeight: '500',
                  }}>
                  {i18n.t('TransferMoney')} {props.name}
                </MyAppText>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
                marginTop: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#00000017',
                  width: 40,
                  height: 40,
                  padding: 12,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <Image source={require('../assets/images/editbenf.png')} />
              </View>
              <View>
                <MyAppText
                  style={{
                    color: 'black',
                    fontFamily: 'Roboto-Medium',
                    fontSize: 16,
                    fontWeight: '500',
                  }}>
                  {i18n.t('Edit')}
                </MyAppText>
                <MyAppText
                  style={{
                    fontFamily: 'Roboto-Medium',
                    fontSize: 14,
                    fontWeight: '500',
                  }}>
                  {i18n.t('EditData', {name: props.name})}
                </MyAppText>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
                marginTop: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#EB001B33',
                  width: 40,
                  height: 40,
                  padding: 12,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <Image source={require('../assets/images/deletebenf.png')} />
              </View>
              <View>
                <MyAppText
                  style={{
                    color: 'black',
                    fontFamily: 'Roboto-Medium',
                    fontSize: 16,
                    fontWeight: '500',
                  }}>
                  {i18n.t('Delete')} {props.name}
                </MyAppText>
                <MyAppText
                  style={{
                    fontFamily: 'Roboto-Medium',
                    fontSize: 14,
                    fontWeight: '500',
                  }}>
                  {i18n.t('DeleteTransactions', {name: props.name})}
                </MyAppText>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EditBeneficierModal;

const styles = StyleSheet.create({
  modalPage: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    position: 'absolute',
    width: '100%',
    height: '33%',
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 10,
  },
  titletext: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  descriptiontext: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  canceltext: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#007236',
    textAlign: 'right',
    fontWeight: '700',
  },
  fingerprint: {
    borderRadius: 50,
    shadowColor: '#00C974',
    shadowOpacity: 1,
    shadowRadius: 90,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    padding: 30,
    width: 70,
    height: 70,
    elevation: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#00C974',
    borderWidth: 1,
  },
  fingerprintsection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
});
