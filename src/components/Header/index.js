import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, ButtonBack, HeaderLogo } from './styles';

import Logo from '../../assets/logo.png';

export default function Header({ navigation }) {
  return (
    <Container>
      <ButtonBack onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color="#FFF" />
      </ButtonBack>
      <HeaderLogo source={Logo} />
    </Container>
  );
}
