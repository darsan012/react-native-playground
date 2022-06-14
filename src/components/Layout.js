import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';

const Layout = ({screenHeader, children}) => {
  return (
    <SafeAreaView>
      <View style={style.LayoutContainer}>
        <View style={style.HeaderContainer}>
          <Text style={style.HeaderText}>{screenHeader}</Text>
        </View>
        {children}
      </View>
    </SafeAreaView>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
  LayoutContainer: {
    height: height,
    width: width,
    backgroundColor: '#F8F9F9',
    padding: 2,
  },
  HeaderContainer: {alignItems: 'center', paddingTop: 15, paddingBottom: 10},
  HeaderText: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
  },
});

export default Layout;
