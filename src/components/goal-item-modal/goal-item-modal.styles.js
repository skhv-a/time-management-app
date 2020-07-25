import styled, { css } from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';

const modalField = css`
  width: 320px;
  min-height: fit-content;
  font-family: Roboto-Regular;

  display: inline-flex;

  align-items: center;

  word-break: break-word;

  font-size: 25.5px;
  color: #404040;

  background-color: #d5d5d5;

  border-radius: 25px;

  padding: 15px;

  position: relative;

  @media only screen and (max-width: 1400px) {
    border-radius: 25px;
    padding: 15px;
    width: 95%;
  }
`;

const descriptionFieldStyles = css`
  margin-top: 30px;
  padding-bottom: 40px;
`;

export const GoalItemModalContainer = styled.div`
  width: 80%;
  overflow: scroll;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1400px) {
    border-radius: 25px;
  }
`;

export const ModalTitle = styled.div`
  ${modalField}
`;

export const ModalDescription = styled(ModalTitle)`
  ${descriptionFieldStyles}
`;

export const Editor = styled(TextareaAutosize)`
  ${modalField}
  outline: none;
  border: none;
  resize: none;
  ${({ description }) => (description ? descriptionFieldStyles : null)}
`;
