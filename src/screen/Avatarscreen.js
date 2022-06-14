import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import zyan from '../assets/zyan.jpeg';

import Layout from '../components/Layout';
const Avatarscreen = ({route}) => {
  return (
    <Layout header={route.params}>
      <View style={style.container}>
        <View style={style.imageContainer}>
          <Image source={zyan} style={style.avatar} />
        </View>
        <View style={style.imageContainer}>
          <Image source={zyan} style={style.borderAvatar} />
        </View>
        <View style={style.imageContainer}>
          <View style={style.textAvatarContainer}>
            <Text style={style.textAvatar}>Z</Text>
          </View>
        </View>
      </View>
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 15,
    margin: 8,
    flexWrap: 'wrap',
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: '#eee',
    padding: 15,
    margin: 8,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },
  borderAvatar: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    borderWidth: 1,
    borderColor: 'red',
  },
  textAvatarContainer: {
    backgroundColor: 'grey',
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    justifyContent: 'center',
  },
  textAvatar: {
    textAlign: 'center',
    fontSize: 50,
    color: 'purple',
  },
});

export default Avatarscreen;
