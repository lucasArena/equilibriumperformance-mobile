import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import SelectStudent from './pages/SelectStudent';
import Workouts from './pages/Workouts';
import StudentWorkout from './pages/StudentWorkout';

import Header from './components/Header';

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
          headerStyle: {
            backgroundColor: '#000',
          },
          header: props => <Header {...props} />,
        }}
      >
        <Stack.Screen
          name="SelectStudent"
          component={SelectStudent}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Workouts"
          component={Workouts}
          options={{
            title: 'Treinos',
          }}
        />
        <Stack.Screen name="StudentWorkout" component={StudentWorkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
