import React from 'react';
import {View, Text, Dimensions, StyleSheet, Button, Alert} from 'react-native';

import Layout from '../components/Layout';
const Textscreen = ({route}) => {
  return (
    <Layout header={route.params}>
      <View style={style.componentContainer}>
        <Text style={{}}>This is default text.</Text>
      </View>
      <View style={style.componentContainer}>
        <Text style={{fontSize: 18, fontStyle: 'italic'}}>
          This is italic text.
        </Text>
      </View>
      <View style={style.componentContainer}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>
          This is bold text.
        </Text>
      </View>
      <View style={style.componentContainer}>
        <Text style={{fontSize: 20, color: 'red'}}>This is red text.</Text>
      </View>
    </Layout>
  );
};

const style = StyleSheet.create({
  componentContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(243,243,243)',
    borderWidth: 1,
    margin: 5,
    borderColor: '#eee',
  },
});

export default Textscreen;
