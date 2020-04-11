import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
`;

export const ButtonContainer = styled(RectButton)`
  padding: 15px 20px;
  margin-top: 10px;
  border-radius: 4px;
  background: #f24424;
`;

export const ButtonContainerText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
