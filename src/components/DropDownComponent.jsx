import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const data = [{label: '043 - Water Way Mall', value: '1'}];

const DropdownComponent = props => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={[styles.label, isFocus && {color: '#007236'}]}>
        {props.label}
      </Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={props.data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    height: 65,
    borderRadius: 10,
    alignSelf: 'center',
    width: '95%',
    marginTop: 3,
  },
  dropdown: {
    height: 50,
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 8,
    top: 11,
    zIndex: 999,
    paddingHorizontal: 8,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  placeholderStyle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    marginTop: 5,
    marginLeft: -8,
    fontWeight: '500',
    color: 'black',
  },
  selectedTextStyle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    marginTop: 5,
    marginLeft: 5,
    fontWeight: '500',
    color: 'black',
  },
  inputSearchStyle: {
    height: 40,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
});
