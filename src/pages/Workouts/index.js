import React from 'react';
import PropTypes from 'prop-types';

import {
  WorkoutList,
  WorkoutContainer,
  Group,
  Title,
  WorkoutText,
  Label,
  StudentInfo,
  StudentName,
  StudentBand,
} from './styles';

import Background from '../../components/Background';

export default function Workouts({ route, navigation }) {
  const { workouts, studentInfo } = route.params;

  return (
    <Background alignItems={false}>
      <StudentInfo>
        <StudentName color="#FFF">{studentInfo.name} - </StudentName>
        <StudentBand color={studentInfo.band.color}>
          {studentInfo.band.name}
        </StudentBand>
      </StudentInfo>
      <WorkoutList
        data={workouts}
        keyExtractor={({ workout }) => String(workout.id)}
        renderItem={({ item: { workout, finished } }) => (
          <WorkoutContainer
            backgroundColor={workout.band.color}
            finished={finished}
            onPress={() =>
              navigation.push('StudentWorkout', {
                exercises: workout.exercises,
                student_id: studentInfo.id,
                workout_id: workout.id,
              })
            }
          >
            <Group>
              {console.tron.log(workout)}
              <Title>Treino {workout.id}</Title>
              <Label finished={finished}>Finalizado</Label>
            </Group>
            <Group>
              <WorkoutText>{workout.description}</WorkoutText>
              <WorkoutText>Faixa {workout.band.name}</WorkoutText>
            </Group>
          </WorkoutContainer>
        )}
      />
    </Background>
  );
}
