import styled from 'styled-components';
import { slideFromBottonAnimation } from '../../animations/animations';

export const InProcessSectionContainer = styled.div`
  width: 60%;
  height: 100vh;
  position: absolute;

  overflow: scroll;

  background-color: #242582;

  margin-left: 25%;

  ${slideFromBottonAnimation};
`;
