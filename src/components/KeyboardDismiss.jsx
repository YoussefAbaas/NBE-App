import {StyleSheet, KeyboardAvoidingView} from 'react-native';
import MyAppText from './MyAppText';

import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const KeyboardDismiss = ({children}) => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior="height"
      keyboardVerticalOffset={-200}>
      {children}
      {/*<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
  </TouchableWithoutFeedback>*/}
    </KeyboardAvoidingView>
  );
};

export default KeyboardDismiss;

const styles = StyleSheet.create({});
