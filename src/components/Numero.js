import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

export default props => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.numero}
      value={props.num}
      onChangeText={ valorDoCampo => props.atualizaValor(props.nome, valorDoCampo)}
    />
  </View>
);

const styles = StyleSheet.create({
  numero: {
    width: 140,
    height: 80,
    fontSize: 20,
    backgroundColor: '#ffffff'
  },
  inputContainer: {
    borderLeftWidth: 4,
    borderRightWidth: 4,
    height: 70,
    margin: 5
  }
});
