import styled from 'styled-components';
import { scaleUpAnimation } from '../../animations/animations';

export const Goal = styled.div`
  min-height: 60px;
  width: 80%;

  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;

  background-color: #272187;
  border-radius: 26px;
  padding: 0 25px;
  margin: 25px 0;

  font-family: Roboto-Regular;
  color: white;
  font-size: min(2vw, 30px);
  cursor: pointer;

  overflow-wrap: break-word;
  ${scaleUpAnimation}
`;
