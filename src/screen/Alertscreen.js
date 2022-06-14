import React from 'react';
import {View, Text, Dimensions, StyleSheet, Alert, Button} from 'react-native';

import Layout from '../components/Layout';
const simpleAlert = () => {
  Alert.alert('Hello I am simple alert');
};
const alertTitle = () => {
  Alert.alert('Alert Title', 'My Alert message');
};
const cancelAlert = () => {
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ],
    // {cancelable: true},
  );
};
const cancelTouchAlert = () => {
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ],
    {cancelable: true},
  );
};
const Alertscreen = ({route}) => {
  return (
    <Layout screenHeader={route.params.screenName}>
      <View style={style.componentContainer}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>
          This is the simple alert.
        </Text>
        <Button title={'Press me'} onPress={simpleAlert} color={'#2e8bd1'} />
      </View>
      <View style={style.componentContainer}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>
          Alert with title.
        </Text>
        <Button title={'Press me'} onPress={alertTitle} color={'#2e8bd1'} />
      </View>
      <View style={style.componentContainer}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>
          Alert with cancel button.
        </Text>
        <Button title={'Press me'} onPress={cancelAlert} color={'#2e8bd1'} />
      </View>
      <View style={style.componentContainer}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>
          Alert message dismisses when touched outside.
        </Text>
        <Button
          title={'Press me'}
          onPress={cancelTouchAlert}
          color={'#2e8bd1'}
        />
      </View>
    </Layout>
  );
};

const style = StyleSheet.create({
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

export default Alertscreen;
