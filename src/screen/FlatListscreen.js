import React from 'react';
import {View, FlatList} from 'react-native';
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
    <Layout header={route.params}>
      <View>
        <FlatList
          data={items}
          renderItem={({item}) => <ListItem item={item} />}
        />
      </View>
    </Layout>
  );
};

export default Flatscreen;
