import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Input, Logo, SignInButton, SignInButtonText } from './styles';

import Image from '../../assets/logo.png';

import { signInRequest } from '../../store/modules/auth/actions';

import Background from '../../components/Background';

export default function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Logo source={Image} />
      <Input
        name="email"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        name="password"
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <SignInButton onPress={handleSubmit}>
        <SignInButtonText>Acessar</SignInButtonText>
      </SignInButton>
    </Background>
  );
}
