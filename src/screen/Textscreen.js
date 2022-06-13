import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  Alert,
} from 'react-native';

const Textscreen = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Welcome</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Textscreen;
