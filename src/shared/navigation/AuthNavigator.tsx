import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../../Auth/Login';
import { RegisterScreen } from '../../Auth/Register';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
