import React from 'react';
import { Alert } from 'react-native';

import {
  ExercisesList,
  Exercise,
  Title,
  Group,
  Category,
  ExerciseText,
} from './styles';

import Background from '../../components/Background';
import Button from '../../components/Button';

import api from '../../services/api';

export default function StudentWorkout({ route, navigation }) {
  const { exercises, student_id, workout_id } = route.params;

  async function handleFinishWorkout() {
    try {
      await api.post('/student/workout/finish', {
        student_id,
        workout_id,
      });
      Alert.alert('Treino finalizado com sucesso');
      navigation.navigate('SelectStudent');
    } catch (err) {
      Alert.alert('Houve um erro ao tentar finalizar seu treino!');
    }
  }

  return (
    <Background>
      <ExercisesList
        data={exercises}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Exercise>
            <Group>
              <Title>{item.exercise.name}</Title>
              <Category>{item.exercise.category.name}</Category>
            </Group>
            <Group>
              <ExerciseText>
                {item.series} X {item.repetitions}
              </ExerciseText>
            </Group>
          </Exercise>
        )}
      />
      <Button onPress={() => handleFinishWorkout()}>Finalizar Treino</Button>
    </Background>
  );
}
