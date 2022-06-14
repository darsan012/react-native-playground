import React from 'react';
import {View, Text, Dimensions, StyleSheet, TextInput} from 'react-native';

import Layout from '../components/Layout';
const Inputscreen = ({route}) => {
  return (
    <Layout screenHeader={route.params.screenName}>
      <View style={style.componentContainer}>
        <TextInput placeholder="Normal text field" style={style.input} />
      </View>
      <View style={style.componentContainer}>
        <TextInput
          placeholder="Numeric text field"
          style={style.input}
          keyboardType="numeric"
        />
      </View>
      <View style={style.componentContainer}>
        <TextInput
          placeholder="Password field"
          style={style.input}
          secureTextEntry
        />
      </View>
      <View style={style.componentContainer}>
        <TextInput
          multiline
          numberOfLines={4}
          placeholder="Multiline component"
          style={style.input}
          placeholderTextColor="black"
        />
      </View>
    </Layout>
  );
};

const style = StyleSheet.create({
  componentContainer: {
    height: 100,
    backgroundColor: 'rgb(243,243,243)',
    borderWidth: 1,
    margin: 5,
    borderColor: '#eee',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Inputscreen;
