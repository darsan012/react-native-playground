/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screens from './src/routes/routes';

const Stack = createNativeStackNavigator();
// import {Provider} from 'react-redux';
// import {store} from './src/store/store';

const App = () => {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map(obj => {
          <Stack.Screen name={obj.name} component={obj.component} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
};

export default App;
