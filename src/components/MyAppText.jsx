import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {useSelector} from 'react-redux';

const MyAppText = ({children, style, ...rest}) => {
  const isarabic = useSelector(state => state.language.AR);
  return (
    <Text
      style={[
        style,
        {fontFamily: isarabic ? 'Roboto-Medium' : 'TheMixArab-Bold'},
      ]}
      {...rest}>
      {children}
    </Text>
  );
};

export default MyAppText;

const styles = StyleSheet.create({});
