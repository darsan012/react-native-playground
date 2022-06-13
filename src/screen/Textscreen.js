import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

const Textscreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Welcome to the text screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Textscreen;
