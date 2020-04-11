import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Logo = styled.Image`
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  padding: 10px 15px;
  background: #fff;
  margin-bottom: 10px;
  align-self: stretch;
`;

export const SignInButton = styled(RectButton)`
  padding: 15px 20px;
  background: #f24424;
  border-radius: 4px;
  align-self: stretch;
`;

export const SignInButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
