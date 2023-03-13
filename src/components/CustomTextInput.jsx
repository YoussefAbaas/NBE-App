import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import MyAppText from './MyAppText';

import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const CustomTextInput = props => {
  const [Pressed, setPressed] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const isarabic = useSelector(state => state.language.AR);
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
          <MyAppText
            style={[
              styles.inputtext,
              Pressed ? {color: '#007236'} : {color: props.textcolor},
            ]}>
            {props.text}
          </MyAppText>
          <TextInput
            value={props.value}
            secureTextEntry={props.secureTextEntry && !showPassword}
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
              fontWeight: '700',
              color: Pressed ? 'black' : props.textcolor,
              textAlign: isarabic ? 'left' : 'right',
            }}
            onFocus={() => setPressed(true)}
            onBlur={() => setPressed(false)}
            onChangeText={text => {
              props.settext(text);
            }}></TextInput>
        </View>
        {(props.text.toLowerCase().includes('password') ||
          props.text.includes('كلمة السر')) && (
          <Pressable
            style={styles.passwordicon}
            onPress={() => {
              setshowPassword(!showPassword);
            }}>
            <Image
              source={
                showPassword
                  ? require('../assets/images/hidepassword.png')
                  : require('../assets/images/showpassword.png')
              }
            />
          </Pressable>
        )}
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
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  passwordicon: {
    position: 'absolute',
    right: 12,
    bottom: 12,
  },
});
