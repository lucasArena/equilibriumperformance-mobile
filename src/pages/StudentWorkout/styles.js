import styled from 'styled-components/native';

export const ExercisesList = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const Exercise = styled.View`
  background: #fff;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px 15px;
  border-radius: 4px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #f24424;
`;

export const Group = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Category = styled.Text`
  color: #f24424;
  font-size: 24px;
  font-weight: bold;
`;

export const ExerciseText = styled.Text`
  color: #999;
  font-size: 16px;
  font-weight: bold;
`;
