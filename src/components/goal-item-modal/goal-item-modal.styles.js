import styled from 'styled-components';
import { setDoneStyles } from '../goal-item/goal-item.styles';

export const GoalItemModalContainer = styled.div`
  width: 80%;
  overflow: scroll;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 700px) {
    border-radius: 25px;
  }
`;

export const ModalTitle = styled.div`
  min-width: 240px;
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

  position: relative;

  @media only screen and (max-width: 700px) {
    border-radius: 0 0 26px 26px;
    padding: 15px;
    overflow: visible;
    margin-top: 100px;
  }

  &:before {
    font-family: RobotoCondensed-Light;

    display: block;
    min-width: 60px;

    margin-right: 25px;
    padding: 15px;

    background-color: #3b3dc5;
    color: white;
    ${setDoneStyles};
    border-radius: 26px 0 0 26px;

    content: 'Title:';

    @media only screen and (max-width: 700px) {
      width: 100%;

      position: absolute;
      bottom: 100%;
      left: 0;

      margin: 0;
      padding: 15px 0;

      border-radius: 26px 26px 0 0;

      text-align: center;
    }
  }
`;

export const ModalDescription = styled(ModalTitle)`
  margin-top: 30px;

  &:before {
    content: 'Desc:';
    @media only screen and (max-width: 700px) {
      content: 'Description:';
    }
  }
`;
