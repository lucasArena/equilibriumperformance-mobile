import React from 'react';
import PropTypes from 'prop-types';

import { WorkoutContainer, Group, Title, WorkoutText } from './styles';

import Background from '../../components/Background';

export default function Workouts({ route, navigation }) {
  const workouts = route.params;
  return (
    <Background alignItems={false}>
      {workouts.map(({ workout }) => (
        <WorkoutContainer
          key={workout.id}
          onPress={navigation.push('StudentWorkout', workout.exercises)}
        >
          <Title>Treino {workout.id}</Title>
          <Group>
            <WorkoutText>{workout.description}</WorkoutText>
            <WorkoutText>Faixa Branca</WorkoutText>
          </Group>
        </WorkoutContainer>
      ))}
    </Background>
  );
}
