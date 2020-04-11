import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const WorkoutContainer = styled(RectButton)`
  background: #fff;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 15px 20px;
`;

export const Group = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #f24424;
`;

export const WorkoutText = styled.Text`
  font-size: 16px;
  color: #999;
`;
