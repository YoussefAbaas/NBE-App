import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Modal,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import MyAppText from './MyAppText';

import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import i18n from '../translation/I18Config';

const AirpayModal = props => {
  const isarabic = useSelector(state => state.language.AR);
  i18n.locale = useSelector(state => state.language.locale);
  return (
    <Modal animationType={'fade'} transparent={true} visible={props.openModal}>
      <View style={styles.modalPage}>
        <View style={styles.modalContent}>
          <Image
            style={{alignSelf: 'center'}}
            source={
              props.success
                ? require('../assets/images/airpaysuccess.png')
                : require('../assets/images/airpayfail.png')
            }
          />
          <MyAppText
            style={{
              fontSize: 20,
              fontWeight: '700',
              color: props.success ? 'black' : '#EB001B',
              textAlign: 'center',
            }}>
            {props.success
              ? i18n.t('MissionComplete')
              : i18n.t('MissionFailed')}
          </MyAppText>
          <MyAppText
            style={{
              fontSize: 16,
              fontWeight: '500',
              textAlign: 'center',
            }}>
            {props.success ? i18n.t('PaymentDone') : i18n.t('PaymentFailed')}
          </MyAppText>
          <MyAppText
            style={{
              fontSize: 40,
              fontWeight: '700',
              color: 'black',
              textAlign: 'center',
            }}>
            $5,542.00
          </MyAppText>
          <View style={styles.submit}>
            {props.success ? (
              <View style={styles.button}>
                <TouchableOpacity onPress={props.toggleModal}>
                  <MyAppText style={styles.buttontext}>
                    {' '}
                    {i18n.t('Done')}
                  </MyAppText>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.submit}>
                <View style={{width: '45%'}}>
                  <View
                    style={[
                      styles.button,
                      {
                        backgroundColor: 'transparent',
                        borderColor: '#EB001B',
                        borderWidth: 1,
                      },
                    ]}>
                    <TouchableOpacity onPress={props.toggleModal}>
                      <MyAppText
                        style={[styles.buttontext, {color: '#EB001B'}]}>
                        {i18n.t('NotNow')}
                      </MyAppText>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{width: '45%'}}>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={props.toggleModal}>
                      <MyAppText style={styles.buttontext}>
                        {i18n.t('TryAgain')}
                      </MyAppText>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AirpayModal;

const styles = StyleSheet.create({
  modalPage: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    position: 'absolute',
    width: 350,
    height: 416,
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 30,
    alignItems: 'center',
    paddingTop: 50,
  },
  button: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: '#007236',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 15,
  },
  buttontext: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  submittext: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
  },
  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    left: 5,
    right: 5,
    flexDirection: 'row',
  },
});
