import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Image } from './styles';

import Logo from '../../assets/logo.png';

import Background from '../../components/Background';
import Input from '../../components/Input';
import Button from '../../components/Button';

import api from '../../services/api';

export default function SelectStudent({ navigation }) {
  const [nickname, setNickname] = useState('');

  async function handleStudent() {
    try {
      const workouts = await api.get(`/student/${nickname}/workouts`);
      navigation.push('Workouts', workouts);
    } catch (err) {
      Alert('Aluno inexistente');
    }
  }

  return (
    <Background>
      <>
        <Image source={Logo} />
        <Input
          value={nickname}
          onChangeText={setNickname}
          placeholder="Digite seu nick"
        />
        <Button onPress={handleStudent}>Vai treinar, frango!</Button>
      </>
    </Background>
  );
}
