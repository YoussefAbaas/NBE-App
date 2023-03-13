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
import {useNavigation} from '@react-navigation/native';
import i18n from '../translation/I18Config';

const MissionCompletedModal = props => {
  const isarabic = useSelector(state => state.language.AR);
  i18n.locale = useSelector(state => state.language.locale);
  const navigation = useNavigation();
  return (
    <Modal animationType={'fade'} transparent={true} visible={props.openModal}>
      <View style={styles.modalPage}>
        <View style={styles.modalContent}>
          <Image source={require('../assets/images/missioncompleted.png')} />
          <MyAppText
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 20,
              fontWeight: '700',
              color: 'black',
              textAlign: 'center',
            }}>
            {i18n.t('MissionComplete')}
          </MyAppText>
          <MyAppText
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 16,
              fontWeight: '400',
              textAlign: 'center',
            }}>
            {props.text}
          </MyAppText>
          <View style={styles.submit}>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => {
                  props.toggleModal();
                  navigation.goBack();
                }}>
                <MyAppText style={styles.buttontext}>
                  {i18n.t('Finish')}
                </MyAppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MissionCompletedModal;

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
    width: '90%',
    height: 332,
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 30,
    alignItems: 'center',
    paddingVertical: 35,
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
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    fontWeight: '600',
  },
  submittext: {
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
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
  },
});
