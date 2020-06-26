import styled from 'styled-components';
import { slideFromBottonAnimation } from '../../animations/animations';

export const DoneSectionContainer = styled.div`
  width: 15%;
  height: 100vh;
  position: absolute;

  overflow: scroll;

  background-color: #2a2ba1;

  margin-left: 85%;

  ${slideFromBottonAnimation};
`;
