import styled from 'styled-components';
import { slideFromBottonAnimation } from '../../animations/animations';

export const TimeManageSectionContainer = styled.div`
  width: 25%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  ${slideFromBottonAnimation}
  @media only screen and (max-width: 1400px) {
    width: 100%;
  }
`;
