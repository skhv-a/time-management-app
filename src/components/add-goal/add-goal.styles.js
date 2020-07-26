import styled from 'styled-components';

import { ReactComponent as addButtonSVG } from '../../assets/add.svg';

export const AddGoalContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 80px;
  background-color: #211c74;
  display: flex;
  justify-content: center;
  align-items: center;
  /* align-self: flex-end; */
  @media only screen and (max-width: 700px) {
    border-radius: 15px 15px 0 0;
  }
`;

export const AddGoalButton = styled(addButtonSVG)`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;
