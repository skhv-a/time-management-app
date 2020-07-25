import styled from 'styled-components';
import { scaleUpAnimation } from '../../animations/animations';

export const ModalWarning = styled.div`
  width: fit-content;
  height: 75px;
  background-color: red;
  color: white;
  font-family: Roboto-Regular;
  font-size: 25px;
  border-radius: 25px;
  padding: 0 25px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  ${scaleUpAnimation};
`;
