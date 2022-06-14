import React from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

import Layout from '../components/Layout';
const Buttonscreen = ({route}) => {
  return (
    <Layout screenHeader={route.params.screenName}>
      <View style={style.componentContainer}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>
          This is the simple default button.
        </Text>
        <Button
          touchSoundDisabled={false}
          title={'Press me'}
          onPress={() => {
            Alert.alert('Button pressed');
          }}
        />
      </View>
      <View style={style.componentContainer}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>
          Default button with color changed.
        </Text>
        <Button
          title={'Press me'}
          onPress={() => {
            Alert.alert('Button pressed');
          }}
          color={'rgb(241,147,255)'}
        />
      </View>
      <View style={style.componentContainer}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>
          Default button disabled.
        </Text>
        <Button
          title={'Press me'}
          disabled
          onPress={() => {
            Alert.alert('Button pressed');
          }}
        />
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
  componentContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(243,243,243)',
    borderWidth: 1,
    borderColor: '#eee',
    padding: 15,
    margin: 8,
  },
});

export default Buttonscreen;
