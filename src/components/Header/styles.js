import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #000;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonBack = styled(RectButton)`
  position: absolute;
  left: 0;
  top: 0;
  padding: 20px;
`;

export const LogoContainer = styled.View`
  justify-content: center;
`;

export const HeaderLogo = styled.Image`
  align-self: center;
`;
