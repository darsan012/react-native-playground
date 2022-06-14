import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

import Layout from '../components/Layout';
const Alertscreen = ({route}) => {
  return (
    <Layout screenHeader={route.params.screenName}>
      <View>
        <Text>This is alert screen texthghhhghghg</Text>
      </View>
    </Layout>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default Alertscreen;
