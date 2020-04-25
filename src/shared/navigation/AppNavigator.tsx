import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../Home/Home';
import { DetailScreen } from '../../Detail/Detail';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Overview' }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
