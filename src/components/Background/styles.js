import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.alignItems ? 'center' : 'flex-start')};
  align-items: center;
  padding: 0 20px;
`;
