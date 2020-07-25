import styled from 'styled-components';
import { scaleUpAnimation } from '../../animations/animations';

export const Container = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${scaleUpAnimation}

  button {
    background-color: #ff932e;
  }
`;
