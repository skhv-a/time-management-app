import styled from 'styled-components';

import { ReactComponent as addButtonSVG } from '../../assets/add.svg';

export const AddGoalContainer = styled.div`
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: #211c74;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

export const AddGoalButton = styled(addButtonSVG)`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;
