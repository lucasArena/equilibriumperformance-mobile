import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import SelectStudent from './pages/SelectStudent';
import Workouts from './pages/Workouts';

export default function Routes() {
  const signed = useSelector(state => state.auth.signed);
  const Stack = createStackNavigator();

  return !signed ? (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SelectStudent" component={SelectStudent} />
        <Stack.Screen name="Workouts" component={Workouts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
