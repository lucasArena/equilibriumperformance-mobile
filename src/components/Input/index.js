import React from 'react';
import { Text } from 'react-native';

import { Container, InputContainer } from './styles';

export default function Input({ ...rest }) {
  return (
    <Container>
      <Text>#</Text>
      <InputContainer {...rest} />
    </Container>
  );
}
