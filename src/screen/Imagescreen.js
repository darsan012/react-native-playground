import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import zyan from '../assets/zyan.jpeg';

import Layout from '../components/Layout';
const Imagescreen = ({route}) => {
  return (
    <Layout screenHeader={route.params.screenName}>
      <View style={style.container}>
        <View style={style.imageContainer}>
          <Image source={zyan} style={style.avatar} />
        </View>
        <View style={style.imageContainer}>
          <Image source={zyan} style={style.coverImage} />
        </View>
        <View style={style.imageContainer}>
          <Image source={zyan} style={style.containImage} />
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
  coverImage: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
  },
  containImage: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
});

export default Imagescreen;
