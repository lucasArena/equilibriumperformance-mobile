import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const WorkoutList = styled.FlatList`
  width: 100%;
`;

export const WorkoutContainer = styled(RectButton)`
  background: ${props =>
    props.backgroundColor ? props.backgroundColor : '#FFF'};
  width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 15px 20px;
`;

export const Group = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #f24424;
`;

export const WorkoutText = styled.Text`
  font-size: 16px;
  color: #999;
  width: 240px;
`;

export const Label = styled.Text`
  display: ${props => (props.finished ? 'flex' : 'none')};
  background: #f24424;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
`;

export const StudentInfo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;
`;

export const StudentName = styled.Text`
  color: ${props => (props.color ? props.color : '#FFF')};
  font-size: 20px;
  font-weight: bold;
`;

export const StudentBand = styled.Text`
  color: ${props => (props.color ? props.color : '#FFF')};
  font-size: 20px;
  font-weight: bold;
`;
