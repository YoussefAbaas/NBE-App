import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';

const CustomTextInput = props => {
  const [Pressed, setPressed] = useState(false);
  return (
    <TouchableWithoutFeedback>
      <View
        style={[
          styles.forminput,
          Pressed
            ? {backgroundColor: 'white'}
            : {backgroundColor: props.background},
          !props.image && {paddingLeft: 15},
        ]}>
        {props.image && (
          <Image
            source={props.image}
            style={[
              styles.inputlogo,
              {width: props.logowidth, height: props.logoheight},
            ]}
          />
        )}
        <View style={[styles.forminputtext]}>
          <Text
            style={[
              styles.inputtext,
              Pressed ? {color: '#007236'} : {color: props.textcolor},
            ]}>
            {props.text}
          </Text>
          <TextInput
            value={props.value}
            secureTextEntry={props.secureTextEntry}
            style={{
              fontSize: 14,
              fontWeight: '700',
              color: Pressed ? 'black' : props.textcolor,
            }}
            onFocus={() => setPressed(true)}
            onBlur={() => setPressed(false)}
            onChangeText={text => {
              props.settext(text);
            }}></TextInput>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  forminput: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 12,
    backgroundColor: 'transparent',
    width: '95%',
    alignSelf: 'center',
    paddingTop: 16,
    height: 65,
    paddingVertical: 8,
  },
  inputlogo: {
    width: 23,
    height: 27,
    marginHorizontal: 15,
  },
  inputtext: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
});