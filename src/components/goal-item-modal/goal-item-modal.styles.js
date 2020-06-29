import styled from 'styled-components';
import { setDoneStyles } from '../goal-item/goal-item.styles';

export const GoalItemModalContainer = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTitle = styled.span`
  width: 80%;
  font-family: Roboto-Regular;
  height: 60px;

  display: flex;
  align-items: center;

  font-size: 25.5px;
  color: #404040;

  background-color: #d5d5d5;

  border-radius: 25px;

  padding: 25px;
  padding-left: 0;

  margin-bottom: 50px;

  &:before {
    display: block;

    margin-right: 25px;
    padding: 25px 15px;

    background-color: #3b3dc5;
    color: white;
    ${setDoneStyles};

    content: 'Title:';
  }
`;

export const ModalDescription = styled(ModalTitle)`
  font-family: RobotoCondensed-Light;

  &:before {
    content: 'Desc:';
  }
`;
