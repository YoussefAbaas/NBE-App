import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Text,
  View,
} from 'react-native';

export default function App() {
  const [text, setText] = React.useState('');

  const handlePress = () => {
    console.log(`Text entered: ${text}`);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.title}>Enter some text:</Text>
      <TextInput style={styles.input} onChangeText={setText} value={text} />
      <Button title="Submit" onPress={handlePress} />
      <View style={styles.extraPadding} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  extraPadding: {
    height: 20,
  },
});
