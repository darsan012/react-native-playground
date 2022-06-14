import React from 'react';
import {View, Text, Dimensions, StyleSheet, Button, Alert} from 'react-native';

import Layout from '../components/Layout';
const Inputscreen = ({route}) => {
  return (
    <Layout screenHeader={route.params.screenName}>
      <View style={style.componentContainer}>
        <Text style={{}}>This is default text.</Text>
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

export default Inputscreen;
