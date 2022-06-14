import React from 'react';
import {View, StyleSheet, ToastAndroid, Button} from 'react-native';

import Layout from '../components/Layout';
const Toastscreen = ({route}) => {
  const showToast = () => {
    ToastAndroid.show(
      'Hello this is toast message !',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  };

  return (
    <Layout header={route.params}>
      <View style={style.container}>
        <Button title="Click to Toast" onPress={() => showToast()} />
      </View>
    </Layout>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
});

export default Toastscreen;
