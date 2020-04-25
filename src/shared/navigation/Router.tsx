import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

type Props = {
  readonly isLogged: boolean;
};

export default function Router({ isLogged }: Props) {
  return (
    <NavigationContainer>
      {isLogged ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
