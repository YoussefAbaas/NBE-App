import {StyleSheet, Text, View, TextInput} from 'react-native';

import React from 'react';

const DigitInput = props => {
  return (
    <View style={styles.forminput}>
      <View style={styles.forminputtext}>
        <TextInput
          ref={props.innerref}
          autoFocus={props.autoFocus}
          maxLength={1}
          placeholder="_"
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 20,
            fontWeight: '400',
            paddingTop: 13,
          }}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
};

export default DigitInput;

const styles = StyleSheet.create({
  forminput: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: 'white',
    height: 70,
    width: 45,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  forminputtext: {
    marginVertical: 5,
  },
});
