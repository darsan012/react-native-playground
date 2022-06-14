import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

import Layout from '../components/Layout';
const Boxscreen = ({route}) => {
  return (
    <Layout screenHeader={route.params.screenName}>
      <View>
        <Text>Hello</Text>
      </View>
    </Layout>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default Boxscreen;
