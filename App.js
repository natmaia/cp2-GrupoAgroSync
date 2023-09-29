import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AsyncStorageComponent from './src/screens/AsyncStorageComponent';
import Screen2 from './src/screens/Screen2';
import Screen1 from './src/screens/Screen1';
import { ValueProvider } from './src/screens/ValueContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ValueProvider>
        <Stack.Navigator initialRouteName="Screen1">
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="AsyncStorageComponent" component={AsyncStorageComponent} />

        </Stack.Navigator>
      </ValueProvider>
    </NavigationContainer>
  );
};

export default App;