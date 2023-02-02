import {
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import React from 'react';

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
