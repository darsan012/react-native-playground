import React from 'react';
import {View, Text, Dimensions, StyleSheet, FlatList} from 'react-native';
import ListItem from '../components/Listitem';

import Layout from '../components/Layout';
const Flatscreen = ({route}) => {
  const items = [
    {text: 'Milk'},
    {text: 'Juice'},
    {text: 'Bread'},
    {text: 'Coke'},
  ];
  return (
    <Layout screenHeader={route.params.screenName}>
      <View>
        <FlatList
          data={items}
          renderItem={({item}) => <ListItem item={item} />}
        />
      </View>
    </Layout>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default Flatscreen;
