import styled from 'styled-components';
import { setDoneStyles } from '../goal-item/goal-item.styles';

export const GoalItemModalContainer = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTitle = styled.div`
  width: 80%;
  font-family: Roboto-Regular;

  display: inline-flex;

  align-items: center;
  word-break: break-word;

  font-size: 25.5px;
  color: #404040;

  background-color: #d5d5d5;

  border-radius: 25px;

  padding: 0 25px;
  padding-left: 0;

  margin-bottom: 50px;

  position: relative;

  &:before {
    font-family: RobotoCondensed-Light;

    display: block;
    min-width: 60px;

    margin-right: 25px;
    padding: 15px;

    background-color: #3b3dc5;
    color: white;
    ${setDoneStyles};

    content: 'Title:';
  }
`;

export const ModalDescription = styled(ModalTitle)`
  &:before {
    content: 'Desc:';
  }
`;
