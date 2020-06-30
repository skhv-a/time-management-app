import styled, { css } from 'styled-components';
import { slideFromBottonAnimation } from '../../animations/animations';

const setCustomSectionContainer = (props) => {
  if (props.inProcess) {
    return css`
      width: 55%;

      background-color: #242582;

      margin-left: 25%;
    `;
  }
  return css`
    width: 20%;

    background-color: #2a2ba1;

    margin-left: 80%;
  `;
};

export const CustomSectionContainer = styled.div`
  height: 100vh;

  position: absolute;

  overflow: scroll;

  ${slideFromBottonAnimation};
  ${setCustomSectionContainer}
`;
